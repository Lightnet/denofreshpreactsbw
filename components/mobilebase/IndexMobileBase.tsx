/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useContext } from "preact/hooks";

import { MobileBaseContext } from "./MobileBaseProvider.tsx"
import  MobileNavMenu from "./MobileBaseNavMenu.tsx"

import MobileBaseMap from "./MobileBaseMap.tsx"
import MobileBase from "./MobileBase.tsx"
import MobileBaseResearch from "./MobileBaseResearch.tsx"
import MobileBaseBuildings from "./MobileBaseBuildings.tsx"
import MobileBaseDevelopment from "./MobileBaseDevelopment.tsx"


import MobileBaseWareHouse from "./MobileBaseWareHouse.tsx"
import MobileBaseInventory from "./MobileBaseInventory.tsx"
import MobileBaseUnts from "./MobileBaseUnts.tsx"
import MobileBaseBattle from "./MobileBaseBattle.tsx"
import MobileBaseSettings from "./MobileBaseSettings.tsx"


export default function Page() {
  const [view, setView] = useState("mobilebase");
  const { baseInfo } = useContext(MobileBaseContext) as any;


  function btntest(){
    console.log("Hello World")
  }

  function selectAction(name:string){
    console.log(name);
    setView(name)
  }
  
  return (
    <Fragment>
      <MobileNavMenu selectAction={selectAction}/>
      <div>
        {view === 'map' && <MobileBaseMap/>}
        {view === 'mobilebase' && <MobileBase/>}
        {view === 'buildings' && <MobileBaseBuildings/>}
        {view === 'research' && <MobileBaseResearch/>}
        {view === 'development' && <MobileBaseDevelopment/>}
        {view === 'warehouse' && <MobileBaseWareHouse/>}
        {view === 'inventory' && <MobileBaseInventory/>}
        {view === 'units' && <MobileBaseUnts/>}
        {view === 'battle' && <MobileBaseBattle/>}
        {view === 'settings' && <MobileBaseSettings/>}
      </div>
    </Fragment>
  );
}
// <label>Base Name: { baseInfo.name }</label>
// <button onClick={()=>btntest()} > Testing</button>