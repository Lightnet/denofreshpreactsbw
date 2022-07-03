/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
import * as THREE from "three";

export default function PageEditor() {
  const [count, setCount] = useState(0);

  //console.log(threejs4Den);
  let renderer;
  if(IS_BROWSER){
    renderer = new THREE.WebGLRenderer();
    console.log("CLIENT")
  }else{
    console.log("SERVER")
  }

  function btntest(){
    console.log("Hello World")
  }

  return (
    <div>
      <label>Editor</label>
      <button onClick={()=>btntest()} > Testing...</button>
    </div>
  );
}
// <WebGLRenderer />