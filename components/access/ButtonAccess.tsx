/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h , createContext, Component } from "preact";
import { useEffect, useState, useContext } from "preact/hooks";
import {AccessContext} from "./AccessProvider.tsx"
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function ButtonAccess(){
  const {user , setUser} = useContext(AccessContext) as any;
  function btnTest(){  
    //console.log(access);
    console.log("test button context")
    console.log(user)
    setUser("aaaa")
  } 
  return (
    <button onClick={btnTest}>Hello Access {user}</button>
  )
}

/*
export default class ButtonAccess extends Component{

  init():void{
    if(IS_BROWSER){
      console.log("BROWSER")
    }else{
      console.log("SSR")
    }
  }

  componentDidMount(){
    //RenderContextthis.init();
  }

  btnTest():void{
    const access = useContext(AccessContext);
    console.log(access);
    
    console.log("test button context")
  }

  render() {
    return (
      <button onClick={this.btnTest}>Hello Access</button>
    )
  }
}
*/