/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import CreateBoard from "./CreateBoard.tsx"
import QueryForum from "./QueryForum.tsx"

import { useState, useEffect } from "preact/hooks";
export default function Page() {
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
  return (
    <div>
      <div>
        <label>Forum</label> 
        <button onClick={()=>setIsShowBoard(true)}> Create Board </button>
        <button onClick={()=>setIsShowTopic(true)}> Create Topic </button>
      </div>
      {isShowBoard == true && <Fragment>
        <CreateBoard onClose={onCloseBoard}/>
      </Fragment>}
      <QueryForum/>
    </div>
  );
}
//<button onClick={()=>btntest()} > Testing...</button>