/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

import {axiodapi} from "../../libs/queryapi.ts";

export default function Page(props:any) {
  const [baseName, setBaseName] = useState("");

  function queryCreateBase(){
    axiodapi.post("/mobilebase",{
      name:baseName
    })
      .then((resp)=>{
        console.log(resp);
        if(resp.data?.api=="HOMEBASE"){
          if(resp.data?.homebase){
            console.log("FOUND")
            callfinish();
          }else{
            console.log("NOT FOUND")
          }
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }

  function callfinish(){
    if(typeof props.onCreated === 'function'){
      props.onCreated();
    }
  }

  function inputBaseName(e:Event){
    if (e.target instanceof HTMLInputElement) {
      setBaseName(e.target.value);
    }
  }

  return (
    <Fragment>  
      <label>Name</label>
      <input value={baseName} onInput={inputBaseName}/>
      <button onClick={()=>queryCreateBase()} > Create </button>
    </Fragment>
  );
}
//