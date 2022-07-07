/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
//import { useState } from "preact/hooks";
export default function Page(props:any) {
  //const [count, setCount] = useState(0);
  function btntest(){
    console.log("Hello World")
  }

  function queryCreateBase(){

  }

  function callfinish(){
    if(typeof props.onCreated === 'function'){
      props.onCreated();
    }
  }

  return (
    <Fragment>  
      <label>Name</label>
      <input/>
      <button onClick={()=>btntest()} > Create </button>
    </Fragment>
  );
}
//