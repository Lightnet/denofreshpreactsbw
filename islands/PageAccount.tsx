/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
import NavMenu from "./NavMenu.tsx"

type childrenProps={
  isLogin:boolean;
  userName:string;
}

export default function PageAccount({isLogin, userName}:childrenProps) {
  //const [count, setCount] = useState(0);

  //if(IS_BROWSER){
    //console.log("CLIENT")
  //}else{
    //console.log("SERVER")
  //}

  function btntest(){
    //console.log("Hello World")
  }

  return (
    <div>
      <NavMenu/>
      <div>
        <label>Account alias: {userName}</label>
      </div>
      <div>
        <div>
          <button onClick={btntest} > Home</button>
          <button onClick={btntest} > Change Passphrase</button>
          <button onClick={btntest} > Forgot Hint</button>
          <button onClick={btntest} > Settings</button>
        </div>
        <div>
          <label> ... </label>
        </div>
        
      </div>
    </div>
  );
}
//<button onClick={btntest} > Testing...</button>