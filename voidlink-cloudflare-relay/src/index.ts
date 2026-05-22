type ClientRole = "pc" | "mobile";

type ClientAttachment = {
  role: ClientRole;
  connectedAt: number;
};

function json(data: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "content-type": "application/json",
      ...init.headers,
    },
  });
}

function send(socket: WebSocket, message: unknown) {
  try {
    socket.send(JSON.stringify(message));
  } catch {
    socket.close(1011, "Send failed");
  }
}

function attachment(socket: WebSocket): ClientAttachment | null {
  try {
    return socket.deserializeAttachment() as ClientAttachment | null;
  } catch {
    return null;
  }
}

export class VoidLinkRoom implements DurableObject {
  constructor(private readonly state: DurableObjectState) {}

  async fetch(request: Request): Promise<Response> {
    if (request.headers.get("upgrade") !== "websocket") {
      return json({ ok: true, service: "voidlink-room" });
    }

    const url = new URL(request.url);
    const role = url.searchParams.get("role");
    if (role !== "pc" && role !== "mobile") {
      return json({ error: "role must be pc or mobile" }, { status: 400 });
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);

    if (role === "pc") {
      for (const socket of this.state.getWebSockets()) {
        const info = attachment(socket);
        if (info?.role === "pc") {
          socket.close(1012, "PC reconnected");
        }
      }
    }

    server.serializeAttachment({ role, connectedAt: Date.now() } satisfies ClientAttachment);
    this.state.acceptWebSocket(server);

    send(server, { type: "RELAY_CONNECTED", role });

    if (role === "pc") {
      this.broadcastToMobiles({ type: "PC_STATUS", connected: true });
    } else {
      send(server, { type: "PC_STATUS", connected: Boolean(this.pcSocket()) });
    }

    return new Response(null, { status: 101, webSocket: client });
  }

  async webSocketMessage(socket: WebSocket, raw: string | ArrayBuffer): Promise<void> {
    let message: unknown;
    try {
      message = JSON.parse(typeof raw === "string" ? raw : new TextDecoder().decode(raw));
    } catch {
      send(socket, { type: "ERROR", message: "Invalid JSON" });
      return;
    }

    const info = attachment(socket);
    if (info?.role === "mobile") {
      const pc = this.pcSocket();
      if (!pc) {
        send(socket, { type: "ERROR", message: "PC is offline" });
        return;
      }
      send(pc, message);
      return;
    }

    if (info?.role === "pc") {
      this.broadcastToMobiles(message);
    }
  }

  async webSocketClose(socket: WebSocket): Promise<void> {
    const info = attachment(socket);
    if (info?.role === "pc") {
      this.broadcastToMobiles({ type: "PC_STATUS", connected: false });
    }
  }

  async webSocketError(socket: WebSocket): Promise<void> {
    socket.close(1011, "Socket error");
  }

  private pcSocket(): WebSocket | null {
    for (const socket of this.state.getWebSockets()) {
      const info = attachment(socket);
      if (info?.role === "pc") return socket;
    }
    return null;
  }

  private broadcastToMobiles(message: unknown): void {
    for (const socket of this.state.getWebSockets()) {
      const info = attachment(socket);
      if (info?.role === "mobile") {
        send(socket, message);
      }
    }
  }
}

const worker: ExportedHandler<Env> = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return json({ ok: true, service: "voidlink-relay" });
    }

    if (url.pathname !== "/voidlink") {
      return json({ error: "Not found" }, { status: 404 });
    }

    if (env.RELAY_TOKEN && url.searchParams.get("token") !== env.RELAY_TOKEN) {
      return json({ error: "Invalid relay token" }, { status: 401 });
    }

    const room = url.searchParams.get("room");
    if (!room) {
      return json({ error: "Missing room" }, { status: 400 });
    }

    const id = env.VOIDLINK_ROOMS.idFromName(room);
    return env.VOIDLINK_ROOMS.get(id).fetch(request);
  },
};

export default worker;
