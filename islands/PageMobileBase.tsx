/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import NavMenu from "./NavMenu.tsx"
import CreateBase from "../components/mobilebase/CreateHomeBase.tsx"
import HomeBase from "../components/mobilebase/HomeBase.tsx"
import { axiodapi } from "../libs/query.ts";

export default function PageMobileBase() {

  const [canvasID, setCanvasID] = useState(crypto.randomUUID());
  const [isCreated, setIsCreated] = useState(false);

  useEffect(()=>{
    checkHomeBase();
  },[])

  function checkHomeBase(){
    axiodapi.get("/mobilebase")
      .then((resp)=>{
        console.log(resp);
        if(resp.data?.api){
          if(resp.data?.homebase){
            console.log("FOUND")
            setIsCreated(true)
          }else{
            console.log("NOT FOUND")
          }
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }

  if(IS_BROWSER){
    //renderer = new THREE.WebGLRenderer();
    console.log("CLIENT")
  }else{
    console.log("SERVER")
  }

  function onCreateBase(){
    setIsCreated(true)
  }

  return (
    <div>
      <NavMenu/>
      <div id={canvasID} style="height:100vh;width:100%;">
        <label> Mobile Base. </label>
        {isCreated === true?(
          <HomeBase/>
        ):(
          <CreateBase onCreated={onCreateBase}/>
        )}
      </div>
    </div>
  );
}