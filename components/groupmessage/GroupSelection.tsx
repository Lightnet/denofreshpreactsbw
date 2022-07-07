/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
//import { useState } from "preact/hooks";
export default function Page() {
  //const [count, setCount] = useState(0);
  function btntest(){
    //console.log("Hello World")
  }
  return (
    <div>
      <label>Select</label>
      <button onClick={()=>btntest()} > Create </button>
      <input />
      <button onClick={()=>btntest()} > Join </button>
      <button onClick={()=>btntest()} > Add </button>
      <button onClick={()=>btntest()} > Remove </button>
      <button onClick={()=>btntest()} > Settings </button>
    </div>
  );
}