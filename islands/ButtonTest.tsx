/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function ButtonTest() {

  function clickTest(e:Event){
    console.log(e)
    console.log("test")
  }

  return <button onClick={clickTest}>Test</button>;
}

