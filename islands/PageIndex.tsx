/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment, Component } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
//import { useState, useContext } from "preact/hooks";
import ButtonTheme from "./ButtonTheme.tsx"
import NavMenu from "./NavMenu.tsx"

type childrenProps={
  isLogin:boolean;
  userName:string;
}

export default function PageIndex({isLogin, userName}:childrenProps) {
  
  //if(IS_BROWSER){
    //console.log("BROWSER")
  //}else{
    //console.log("SERVER")
  //}

  return (
    <div>
      {isLogin === true && <Fragment>
        <NavMenu/>
      </Fragment>}
      {isLogin === false && <Fragment>
        <a href="/auth/signin">Sign In</a> <span> </span>
        <a href="/auth/signup">Sign Up</a>
      </Fragment>}
      <ButtonTheme/>
      <p> Welcome {userName}, to Deno and Fresh API </p> 
    </div>
  );
}