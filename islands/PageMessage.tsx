/** @jsx h */
import { h, Fragment } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

export default function PageMessage() {
  const [count, setCount] = useState(0);

  if(IS_BROWSER){
    console.log("CLIENT")
  }else{
    console.log("SERVER")
  }

  function btntest(){
    console.log("Hello World")
  }

  return (
    <Fragment>
      <label>Message</label>
      <button onClick={()=>btntest()} > Testing...</button>
    </Fragment>
  );
}