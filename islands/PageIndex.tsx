/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment, Component } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
import ButtonTheme from "./ButtonTheme.tsx"

type childrenProps={
  isLogin:boolean;
  userName:string;
}

export default function PageIndex({isLogin, userName}:childrenProps) {
  const [count, setCount] = useState(0);

  if(IS_BROWSER){
    console.log("BROWSER")
  }else{
    console.log("SERVER")
  }

  //<ButtonTheme/>
  return (
    <div>
      <ButtonTheme/>
      <p> Welcome {userName}, to Deno and Fresh API </p> 
      {isLogin === true && <Fragment>
        <a href="/threejs">Threejs</a> <span> </span>
        <a href="/editor">Editor</a> <span> </span>
        <a href="/contact">Contact</a> <span> </span>
        <a href="/message">Message</a> <span> </span>
        <a href="/groupmessage">Group Message</a> <span> </span>
        <a href="/game">Game</a> <span> </span>
        <a href="/chat">Chat</a> <span> </span>
        <a href="/testlab">Test Lab</a> <span> </span>
        <a href="/mobilebase">Mobile Base</a> <span> </span>
        <a href="/settings">Settings</a> <span> </span>
        <a href="/auth/signout">Sign Out</a> <span> </span>
      </Fragment>}
      {isLogin === false && <Fragment>
        <a href="/auth/signin">Sign In</a> <span> </span>
        <a href="/auth/signup">Sign Up</a>
      </Fragment>}
    </div>
  );
}