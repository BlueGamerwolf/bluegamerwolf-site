import http from "node:http";
import { WebSocketServer } from "ws";

const port = Number(process.env.VOIDLINK_RELAY_PORT || 8787);
const requiredToken = process.env.VOIDLINK_RELAY_TOKEN || "";
const rooms = new Map();

function send(socket, message) {
  if (socket.readyState === socket.OPEN) {
    socket.send(JSON.stringify(message));
  }
}

function roomFor(id) {
  if (!rooms.has(id)) {
    rooms.set(id, { pc: null, mobiles: new Set() });
  }
  return rooms.get(id);
}

const server = http.createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ ok: true, service: "voidlink-relay" }));
    return;
  }
  response.writeHead(404);
  response.end("Not found");
});

const wss = new WebSocketServer({ server, path: "/voidlink" });

wss.on("connection", (socket, request) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const role = url.searchParams.get("role");
  const roomId = url.searchParams.get("room");
  const token = url.searchParams.get("token") || "";

  if (!roomId || !["pc", "mobile"].includes(role || "")) {
    send(socket, { type: "ERROR", message: "Missing role or room" });
    socket.close(1008);
    return;
  }

  if (requiredToken && token !== requiredToken) {
    send(socket, { type: "ERROR", message: "Invalid relay token" });
    socket.close(1008);
    return;
  }

  const room = roomFor(roomId);
  socket.role = role;
  socket.roomId = roomId;

  if (role === "pc") {
    room.pc?.close(1012, "PC reconnected");
    room.pc = socket;
    send(socket, { type: "RELAY_CONNECTED", role, room: roomId });
    for (const mobile of room.mobiles) {
      send(mobile, { type: "PC_STATUS", connected: true });
    }
  } else {
    room.mobiles.add(socket);
    send(socket, { type: "RELAY_CONNECTED", role, room: roomId });
    send(socket, { type: "PC_STATUS", connected: Boolean(room.pc) });
  }

  socket.on("message", (raw) => {
    let message;
    try {
      message = JSON.parse(raw.toString());
    } catch {
      send(socket, { type: "ERROR", message: "Invalid JSON" });
      return;
    }

    if (socket.role === "mobile") {
      if (!room.pc) {
        send(socket, { type: "ERROR", message: "PC is offline" });
        return;
      }
      send(room.pc, message);
      return;
    }

    for (const mobile of room.mobiles) {
      send(mobile, message);
    }
  });

  socket.on("close", () => {
    const currentRoom = rooms.get(socket.roomId);
    if (!currentRoom) return;
    if (socket.role === "pc" && currentRoom.pc === socket) {
      currentRoom.pc = null;
      for (const mobile of currentRoom.mobiles) {
        send(mobile, { type: "PC_STATUS", connected: false });
      }
    }
    if (socket.role === "mobile") {
      currentRoom.mobiles.delete(socket);
    }
    if (!currentRoom.pc && currentRoom.mobiles.size === 0) {
      rooms.delete(socket.roomId);
    }
  });
});

server.listen(port, () => {
  console.log(`VoidLink relay listening on :${port}/voidlink`);
});
