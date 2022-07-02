/** @jsx h */
import { h, Fragment } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

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
          <label>Inbox</label>
          </Fragment>}
        {view === 'compose' && <Fragment>
          <label>compose</label>
          </Fragment>}
        {view === 'message' && <Fragment>
          <label>message</label>
          </Fragment>}
        {view === 'settings' && <Fragment>
          <label>settings</label>
          </Fragment>}
      </div>

    </Fragment>
  );
}