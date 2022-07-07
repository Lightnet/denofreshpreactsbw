/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
//import { useState } from "preact/hooks";
export default function Page(props:any) {
  //const [count, setCount] = useState(0);
  function selectMenu(name:string){
    //console.log("Hello World")
    if(typeof props.selectAction === 'function'){
      props.selectAction(name);
    }
  }
  return (
    <div>  
      <label>Menu</label>
      <button onClick={()=>selectMenu('map')}> Map </button>
      <button onClick={()=>selectMenu('mobilebase')}> Mobile Base </button>
      <button onClick={()=>selectMenu('buildings')}> Buildings </button>
      <button onClick={()=>selectMenu('research')}> Research </button>
      <button onClick={()=>selectMenu('development')}> Development </button>
      <button onClick={()=>selectMenu('inventory')}> Inventory </button>
      <button onClick={()=>selectMenu('warehouse')}> Warehouse </button>
      <button onClick={()=>selectMenu('units')}> Units </button>
      <button onClick={()=>selectMenu('battle')}> Battle </button>
      <button onClick={()=>selectMenu('settings')}> Settings </button>
    </div>
  );
}
//<button onClick={()=>btntest()} > Testing...</button>