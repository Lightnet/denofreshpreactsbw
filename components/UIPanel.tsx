/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function Panel() {

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