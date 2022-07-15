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

export default function QueryBoard() {

  const [boards, setBoards] = useState<any>([]);

  useEffect(()=>{
    getBoards()
  },[])


  function getBoards(){
    axiodapi.get('forum/board')
    .then(resp=>{
      console.log(resp)
      if(resp.data?.api){
        if(resp.data?.boards){
          setBoards(resp.data.boards)
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
        <div><a href={`/forum/board?id=${item.id}`}>Board: {item.name}</a> </div>
        <QuillContent content={String(item.content)}/>
        
      </div>)}
    </div>
  );
}
// <div><label>{item.content}</label> </div>