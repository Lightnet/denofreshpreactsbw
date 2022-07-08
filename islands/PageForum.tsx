/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
//import { useState } from "preact/hooks";
import NavMenu from "./NavMenu.tsx"
import ForumMain from "../components/forum/Index.tsx"

export default function Page() {

  return (
    <div>
     <NavMenu/> 
      <ForumMain/>
    </div>
  );
}