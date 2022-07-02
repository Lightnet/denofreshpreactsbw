


/** @jsx h */
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";


export default function PageMobileBase() {

  const [canvasID, setCanvasID] = useState(crypto.randomUUID());

  if(IS_BROWSER){
    //renderer = new THREE.WebGLRenderer();
    console.log("CLIENT")
  }else{
    console.log("SERVER")
  }

  return (
    <Fragment>
      <div id={canvasID} style="height:100vh;width:100%;">
        <label> Hello World! Mobile Base. </label>
      </div>
    </Fragment>
  );
}