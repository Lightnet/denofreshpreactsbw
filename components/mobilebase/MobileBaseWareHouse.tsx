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
  const { baseInfo } = useContext(MobileBaseContext) as any;

  function btntest(){
    console.log("Hello World")
  }
  
  return (
    <Fragment>
      <div>
        <label>MobileBaseWareHouse</label>
      </div>
    </Fragment>
  );
}
// 
// <button onClick={()=>btntest()} > Testing</button>