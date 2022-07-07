/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import NavMenu from "./NavMenu.tsx"
import CreateBase from "../components/mobilebase/CreateHomeBase.tsx"
import HomeBase from "../components/mobilebase/HomeBase.tsx"
import { axiodapi } from "../libs/queryapi.ts";
import MobileBaseProvider,{ MobileBaseContext } from "../components/mobilebase/MobileBaseProvider.tsx"
export default function PageMobileBase() {

  const [canvasID, setCanvasID] = useState(crypto.randomUUID());
  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [baseInfo, setBaseInfo] = useState(null);
  //const { setBaseInfo } = useContext(MobileBaseContext) as any;

  useEffect(()=>{
    checkHomeBase();
  },[])

  function checkHomeBase(){
    axiodapi.get("/mobilebase")
      .then((resp)=>{
        console.log(resp);
        if(resp.data?.api){
          if(resp.data?.homebase){
            //console.log("FOUND")
            setBaseInfo(resp.data.homebase)
            setIsCreated(true)
          }else{
            console.log("NOT FOUND")
          }
        }
        setIsLoading(false)
      })
      .catch((error)=>{
        console.log(error);
      });
  }

  //if(IS_BROWSER){
    //renderer = new THREE.WebGLRenderer();
    //console.log("CLIENT")
  //}else{
    //console.log("SERVER")
  //}

  function onCreateBase(){
    setIsCreated(true)
  }

  if(isLoading){
    return ( <div> Loading... </div> )
  }

  return (
    <div>
      <NavMenu/>
      <MobileBaseProvider baseInfo={baseInfo}>
        <div id={canvasID} style="height:100vh;width:100%;">
          {isCreated === true?(
            <HomeBase/>
          ):(
            <CreateBase onCreated={onCreateBase}/>
          )}
        </div>
      </MobileBaseProvider>
    </div>
  );
}
// <label> Mobile Base. </label>