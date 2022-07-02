/** @jsx h */
import { h, Fragment } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

import { WebSocketClient, StandardWebSocketClient } from "https://deno.land/x/websocket@v0.1.4/mod.ts";



export default function PageChat() {
  const [count, setCount] = useState(0);
  const endpoint = "ws://localhost:3000";

  if(IS_BROWSER){
    console.log("CLIENT")
    
    const ws: WebSocketClient = new StandardWebSocketClient(endpoint);
    ws.on("open", function() {
      console.log("ws connected!");
      ws.send("something");
    });
    ws.on("message", function (message: string) {
      console.log(message);
    });
  }else{
    console.log("SERVER")
  }

  function btntest(){
    console.log("Hello World")
  }

  return (
    <Fragment>
      <label>Chat</label>
      <button onClick={()=>btntest()} > Testing...</button>
    </Fragment>
  );
}