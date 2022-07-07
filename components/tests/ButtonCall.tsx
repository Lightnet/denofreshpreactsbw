/*
  License: MIT
  Created by: Lightnet
*/

// https://preactjs.com/guide/v8/api-reference/#lifecycle-methods

/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

type childrenProps = {
  testcall: ()=> void;
  datatest?:string;
}

export default function ButtonCall(props:childrenProps) {

  function clickTest(e:Event){
    console.log(e)
    console.log("test")
    if(typeof props.testcall === 'function'){
      props.testcall();
    }
  }

  useEffect(()=>{
    //console.log("init...")
    return () => {
      // Optional: Any cleanup code
      //console.log("clean up...")
    };
  },[])

  return <button onClick={clickTest}>Test CALL</button>;
}

