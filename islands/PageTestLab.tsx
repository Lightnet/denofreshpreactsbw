/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import ButtonAxiod from "./ButtonAxiod.tsx"
import ButtonAxiodRefresh from "./ButtonAxiodRefresh.tsx"
import NavMenu from "./NavMenu.tsx"

export default function PageTestLab() {

  const [canvasID, setCanvasID] = useState(crypto.randomUUID());

  if(IS_BROWSER){
    //renderer = new THREE.WebGLRenderer();
    console.log("CLIENT")
  }else{
    console.log("SERVER")
  }

  return (
    <div>
      <NavMenu/>
      <div id={canvasID} style="height:100vh;width:100%;">
      <label> Test Lab </label>
      <div>
        <ButtonAxiod />
        <ButtonAxiodRefresh />
      </div>
      </div>
    </div>
  );
}