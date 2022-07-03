/*
  License: MIT
  Created by: Lightnet
*/

// https://preactjs.com/guide/v8/api-reference/#lifecycle-methods

/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

//import {componentDidMount} from "preact/rout"

export default function ButtonEvent() {

  function clickTest(e:Event){
    console.log(e)
    console.log("test")
  }

  useEffect(()=>{
    console.log("init...")
    return () => {
      // Optional: Any cleanup code
      console.log("clean up...")
    };
  },[])

  return <button onClick={clickTest}>Test</button>;
}

