/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
//import { useState } from "preact/hooks";
//import NavMenu from "./NavMenu.tsx"
export default function Page() {
  //const [count, setCount] = useState(0);

  //if(IS_BROWSER){
    //console.log("CLIENT")
  //}else{
    //console.log("SERVER")
  //}

  function btntest(){
    //console.log("Hello World")
  }
  // <NavMenu/>
  return (
    <Fragment>
      <label>Admin</label>
      <button onClick={()=>btntest()} > Test</button>
    </Fragment>
  );
}