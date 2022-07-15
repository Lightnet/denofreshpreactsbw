/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";
import { axiodapi } from "../../libs/queryapi.ts"
import QuillContent from "./QuillContent.tsx"

export default function QueryForum() {

  const [boards, setBoards] = useState<any>([]);

  useEffect(()=>{
    getBoards()
  },[])

  function getBoards(){
    axiodapi.get('forum/topic')
    .then(resp=>{
      console.log(resp)
      if(resp.data?.api){
        if(resp.data?.topics){
          setBoards(resp.data.topics)
        }
      }
    }).catch(error=>{
      console.log(error)
    })
  }

  return (
    <div>
      <div>
        <label>Index</label>
      </div>
      {boards.map((item:any)=><div key={item.id}>
        <div>
          <a href={(`/forum/topic?id=${item.id}`)}>Topic: {item.name}</a> 
        </div>
      </div>)}
    </div>
  );
}
// <QuillContent content={String(item.content)}/>
// <div><label>{item.content}</label> </div>