/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
import MessageInbox from "./MessageInbox.tsx";
import MessageCompose from "./MessageCompose.tsx";
import Message from "./Message.tsx";

export default function PageMessage() {
  const [count, setCount] = useState(0);
  const [view, setView] = useState("inbox");

  if(IS_BROWSER){
    console.log("CLIENT")
  }else{
    console.log("SERVER")
  }
  
  function clickView(name:string){
    setView(name)
  }

  return (
    <Fragment>
      <div>
        <label>Message</label>
        <button onClick={()=>clickView('inbox')}> Inbox </button>
        <button onClick={()=>clickView('compose')}> Compose </button>
        <button onClick={()=>clickView('settings')}> Settings </button>
      </div>
      <div>
        {view === 'inbox' && <Fragment>
          <MessageInbox/>
          </Fragment>}
        {view === 'compose' && <Fragment>
          <MessageCompose/>
          </Fragment>}
        {view === 'message' && <Fragment>
          <Message/>
          </Fragment>}
        {view === 'settings' && <Fragment>
          <label>settings</label>
          </Fragment>}
      </div>

    </Fragment>
  );
}