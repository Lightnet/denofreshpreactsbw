/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";

import CreateBoard from "./CreateBoard.tsx"
import CreateTopic from "./CreateTopic.tsx"

import QueryBoard from "./QueryBoard.tsx"
import QueryTopic from "./QueryTopic.tsx"

export default function Index() {

  const [isShowBoard, setIsShowBoard] = useState(false);
  const [isShowTopic, setIsShowTopic] = useState(false);

  useEffect(()=>{

  },[])

  function onCloseBoard(){
    setIsShowBoard(false)
  }

  function onCloseTopic(){
    setIsShowTopic(false)
  }

  function openCreate(name:string){
    if(name=="board"){
      setIsShowBoard(true)
      setIsShowTopic(false)
    }

    if(name=="topic"){
      setIsShowBoard(false)
      setIsShowTopic(true)
    }
  }

  return (
    <div>
      <div>
        <label>Forum</label> 
        <button onClick={()=>openCreate("board")}> Create Board </button>
        <button onClick={()=>openCreate("topic")}> Create Topic </button>
      </div>
      {isShowBoard == true && <Fragment>
        <CreateBoard onClose={onCloseBoard}/>
      </Fragment>}
      {isShowTopic == true && <Fragment>
        <CreateTopic onClose={onCloseTopic}/>
      </Fragment>}
      <QueryBoard />
      <QueryTopic />
    </div>
  );
}
//<button onClick={()=>btntest()} > Testing...</button>