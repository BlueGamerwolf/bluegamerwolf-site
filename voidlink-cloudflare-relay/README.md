# VoidLink Cloudflare Relay

Free websocket relay for VoidLink using Cloudflare Workers and Durable Objects.

## Install

```powershell
cd E:\bluegamerwolf-site\voidlink-cloudflare-relay
npm install
```

## Local Dev

```powershell
npm run dev
```

Local websocket URL:

```text
ws://localhost:8787/voidlink
```

## Deploy

Login once:

```powershell
npx wrangler login
```

Set the relay token:

```powershell
npx wrangler secret put RELAY_TOKEN
```

Deploy:

```powershell
npm run deploy
```

Cloudflare will print a workers.dev URL. Use:

```text
wss://<your-worker>.<your-account>.workers.dev/voidlink
```

## VoidLink Settings

Use the same room and token on the PC and phone.

PC `server/app/config/config.json`:

```json
{
  "relay_url": "wss://<your-worker>.<your-account>.workers.dev/voidlink",
  "relay_room": "my-private-room",
  "relay_token": "the-secret-token"
}
```

Mobile Settings:

```text
Relay websocket URL: wss://<your-worker>.<your-account>.workers.dev/voidlink
Relay room: my-private-room
Relay token: the-secret-token
```

The website can stay hosted on Vercel. Only this relay runs on Cloudflare.
