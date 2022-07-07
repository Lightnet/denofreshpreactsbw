/*
  License: MIT
  Created by: Lightnet
*/

// https://codesandbox.io/s/l909km2p5z
// https://preactjs.com/tutorial/06-context/

/** @jsx h */
import { h , createContext, Component } from "preact";
import { useEffect, useState, useMemo } from "preact/hooks";

export const MobileBaseContext = createContext<unknown>({});

export default function MobileBaseProvider(props:any) {
  const [user, setUser] = useState<string>("")
  const [baseInfo, setBaseInfo] = useState<string>("")

  useEffect(()=>{
    if(props.baseInfo){
      console.log("FOUND BASE")
      console.log(props.baseInfo)
      setBaseInfo(props.baseInfo);
    }
  },[])

  const auth = useMemo(() => {
    return { 
      user, setUser,
      baseInfo, setBaseInfo,
    }
  }, [
    user,
    baseInfo,
  ])

  return (
    <MobileBaseContext.Provider value={auth}>
      {props.children}
    </MobileBaseContext.Provider>
  )
}