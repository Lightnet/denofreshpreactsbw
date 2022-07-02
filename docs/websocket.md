https://deno.land/x/websocket@v0.1.4


```ts
import { WebSocketClient, WebSocketServer } from "https://deno.land/x/websocket@v0.1.4/mod.ts";

const wss = new WebSocketServer(8080);
wss.on("connection", function (ws: WebSocketClient) {
  ws.on("message", function (message: string) {
    console.log(message);
    ws.send(message);
  });
});
```
```ts
import { WebSocketClient, StandardWebSocketClient } from "https://deno.land/x/websocket@v0.1.4/mod.ts";
const endpoint = "ws://127.0.0.1:8080";
const ws: WebSocketClient = new StandardWebSocketClient(endpoint);
ws.on("open", function() {
  console.log("ws connected!");
  ws.send("something");
});
ws.on("message", function (message: string) {
  console.log(message);
});
```
https://medium.com/deno-the-complete-reference/deno-nuggets-websocket-echo-server-190e5862537

