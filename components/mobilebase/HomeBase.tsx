/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useContext } from "preact/hooks";

import { MobileBaseContext } from "./MobileBaseProvider.tsx"

export default function Page() {
  //const [count, setCount] = useState(0);
  const { baseInfo } = useContext(MobileBaseContext) as any;

  function btntest(){
    console.log("Hello World")
  }
  
  return (
    <Fragment>  
      <label>Base Name: { baseInfo.name }</label>
      <button onClick={()=>btntest()} > Testing</button>
    </Fragment>
  );
}
//