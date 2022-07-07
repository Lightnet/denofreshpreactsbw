/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h , createContext, Component, Fragment } from "preact";
import { useEffect, useState, useContext } from "preact/hooks";
import {AccessContext} from "./AccessProvider.tsx"
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function ButtonAccess(){
  const {user , setUser} = useContext(AccessContext) as any;
  function btnTest0(){  
    setUser("")
  } 
  function btnTest1(){  
    setUser("user 1")
  } 
  function btnTest2(){  
    setUser("user 2")
  } 
  return (
    <Fragment>
      <label> Hello, [{user}]</label>
    <button onClick={btnTest0}>Hello user 0 </button>
    <button onClick={btnTest1}>Hello user 1 </button>
    <button onClick={btnTest2}>Hello user 2 </button>
    </Fragment>
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