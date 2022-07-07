/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment, createContext } from "preact";
import { useState, useContext, useMemo } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import ButtonAxiod from "../components/tests/ButtonAxiod.tsx"
import ButtonAxiodRefresh from "../components/tests/ButtonAxiodRefresh.tsx"
import NavMenu from "./NavMenu.tsx"
import ButtonCall from "../components/tests/ButtonCall.tsx"

import AccessProvider from "../components/access/AccessProvider.tsx";
import ButtonAccess from "../components/access/ButtonAccess.tsx"
import DisplayUser from "../components/access/DisplayUser.tsx"

//export const AccessContext = createContext<any>({});

//const [user, setUser] = useState<string>("")
//const auth = useMemo(() => {
  //return { user, setUser }
//}, [user])
//const AccessContext = createContext({auth});
//const AccessContext = createContext("auth");

//const Theme = createContext('dark');

//function DisplayTheme() {
  //const theme = useContext(Theme);
  //console.log()
  //return <p>Active theme: {theme}</p>;
//}

//function ButtonAccess(){
  //const {user , setUser} = useContext(AccessContext);
  //function btnTest(){  
    //console.log(access);
    //console.log("test button context")
    //console.log(user)
    //setUser("aaaa")
  //} 
  //return (
    //<button onClick={btnTest}>Hello Access {user}</button>
  //)
//}

export default function PageTestLab() {

  const [canvasID, setCanvasID] = useState(crypto.randomUUID());

  //if(IS_BROWSER){
    //renderer = new THREE.WebGLRenderer();
    //console.log("CLIENT")
  //}else{
    //console.log("SERVER")
  //}

  function testCALL(){
    console.log("child test?")
  }

  const [user, setUser] = useState<string>("")

  const auth = useMemo(() => {
    return { user, setUser }
  }, [user])

  return (
    <div>
      <NavMenu/>
      <div id={canvasID} style="height:100vh;width:100%;">
        <label> Test Lab </label>
        <div>
          <ButtonAxiod />
          <ButtonAxiodRefresh />
          <ButtonCall testcall={testCALL} />
        </div>
        <AccessProvider>
          <ButtonAccess/>
          <DisplayUser/>
        </AccessProvider>
      </div>
    </div>
  );
}
/*
<Theme.Provider value="dark">
          <DisplayTheme />
        </Theme.Provider>

<AccessContext.Provider value={auth}>
          <ButtonAccess/>
        </AccessContext.Provider>
*/