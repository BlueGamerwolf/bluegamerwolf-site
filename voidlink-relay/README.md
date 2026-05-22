# VoidLink Relay

This is a small websocket relay for VoidLink. The Windows PC connects outward to this service, and the mobile app connects to the same room from cellular data.

## Local Run

```powershell
npm install
$env:VOIDLINK_RELAY_TOKEN="change-this-secret"
$env:VOIDLINK_RELAY_PORT="8787"
npm run voidlink:relay
```

Health check:

```text
http://localhost:8787/health
```

Websocket endpoint:

```text
ws://localhost:8787/voidlink?role=mobile&room=my-room&token=change-this-secret
```

Use `wss://` when hosted behind HTTPS.

## Hosting

Run this as a long-lived Node service on a VPS, Railway, Render, Fly.io, or another host that supports websockets. Standard Vercel serverless functions are not a good match for this relay because websocket sessions must stay open.
