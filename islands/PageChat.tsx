/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
import { WebSocketClient, StandardWebSocketClient } from "https://deno.land/x/websocket@v0.1.4/mod.ts";
import NavMenu from "./NavMenu.tsx"

export default function PageChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const endpoint = "ws://localhost:3000";

  if(IS_BROWSER){
    console.log("CLIENT")
  }else{
    console.log("SERVER")
  }

  function initChat(){
    const ws: WebSocketClient = new StandardWebSocketClient(endpoint);
    ws.on("open", function() {
      console.log("ws connected!");
      ws.send("something");
    });
    ws.on("message", function (message: string) {
      console.log(message);
    });
  }

  function sendChatMessage(){
    console.log("Hello World")
  }

  return (
    <div>
      <NavMenu/>
      <div>
      <label>Chat</label>
      <input />
      <button onClick={()=>sendChatMessage()} > Submit</button>
      </div>
    </div>
  );
}