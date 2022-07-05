/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";
import { WebSocketClient, StandardWebSocketClient } from "https://deno.land/x/websocket@v0.1.4/mod.ts";
import NavMenu from "./NavMenu.tsx"

type TMessage={
  id:string;
  text:string;
}

export default function PageChat() {
  const [chatMessage, setChatMessage] = useState("aaasss");
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [client, setClient] = useState<WebSocketClient>();
  const endpoint = "ws://localhost:3000";

  if(IS_BROWSER){
    console.log("CLIENT")
  }else{
    console.log("SERVER")
  }

  function inputMessage(e:Event){
    if (e.target instanceof HTMLInputElement) {
      console.log(e.target.value);
      const msg = e.target.value;
      setChatMessage(msg as string );
    }
  }

  useEffect(()=>{
    initChat();
  },[])

  function clickInitChat(){

  }

  function initChat(){
    const ws: WebSocketClient = new StandardWebSocketClient(endpoint);
    ws.on("open", function() {
      console.log("ws connected!");
      ws.send("something");
    });
    ws.on("message", function (me:MessageEvent) {
      console.log("HELLO FROM SERVER...")
      //console.log(msg);
      //if(IS_BROWSER){
        //console.log(crypto.randomUUID())
      //}
      //console.log(messages)
      setMessages(state=>[...state, 
        {
        id: crypto.randomUUID(),
        text:me.data
        }
      ])
    });
    setClient(ws);
  }

  function sendChatMessage(){
    console.log("Hello World")
    console.log(client)
    client?.send(chatMessage as string)
  }

  return (
    <div>
      <NavMenu/>
      <div>
      <button onClick={()=>clickInitChat()} > Init Chat</button>

      <label>Chat</label>
      <input value={chatMessage} onInput={inputMessage} />
      <button onClick={()=>sendChatMessage()} > Submit</button>
      </div>
      <div style="height:calc(100vh - 40px);width:100%;overflow-y: scroll;">
        {console.log(messages)}
        {messages.map(item=><div key={item.id}> 
          <label> {item.text}</label>
        </div>)}
      </div>
    </div>
  );
}