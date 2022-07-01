


/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import UISignOut from "../../islands/UISignOut.tsx"

export default function SignOut() {

  function Test(){
    console.log("test...")
  }

  return (
    <div>
      <p>
        Sign Out Page
      </p>
      <UISignOut/>
      <button onClick={()=>Test()}>Test</button>
    </div>
  );
}
