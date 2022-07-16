/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { IS_BROWSER, Head } from "$fresh/runtime.ts";
import { useState,useEffect } from "preact/hooks";
import QuillContent from "../components/forum/QuillContent.tsx"
import CreateTopic from "../components/forum/CreateTopic.tsx"

import { axiodapi } from "../libs/queryapi.ts"

type boardProps={
  postID?:string;
}

export default function PageBoard(props:boardProps) {

  const [isCreateTopic, setIsCreateTopic] = useState(false);
  const [topics, setTopics] = useState<any[]>([]);

  const [boardInfo, setBoardInfo] = useState<any>({});
  const [boardContent, setBoardContent] = useState<any>("");

  useEffect(()=>{
    console.log(props)
    if(props.postID){
      getBoardInfo(props.postID)
    }
    
  },[])
  
  function getBoardInfo(id:string){
    axiodapi.get(`/forum/board?id=${id}`)
    .then(resp=>{
      console.log(resp)
      //getComments(id)
      if(resp.status ==200){
        if(resp.data?.api){
          console.log(resp.data)
          if(resp.data?.board){
            setBoardInfo(resp.data.board)
            setBoardContent(resp.data.board.content)
            getTopics(id)
          } 
        }
      }
    })
    .catch(error=>{
      console.log(error)
    })
  }

  function getTopics(id:string){
    //axiodapi.post("/forum/comment",{
      //postID:id
    //})
    axiodapi.get(`/forum/topic?parentid=${id}`)
    .then(resp=>{
      console.log(resp)
      if(resp.status ==200){
        if(resp.data?.api){
          if(resp.data?.topics){
            setTopics(resp.data.topics)
          } 
        }
      }
    })
    .catch(error=>{
      console.log(error)
    })
  }

  function postTopic(){
    //console.log("Hello World")
    setIsCreateTopic(true)
  }

  function onCloseTopic(){
    setIsCreateTopic(false)
  }

  return (
    <Fragment>
      <Head>
        <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"/>
      </Head>
    <div>
      <div>
        <div>
          <label>Board:{boardInfo.name}</label>
        </div>
        {boardContent && <QuillContent content={String(boardContent)} />}

        {isCreateTopic ?(
          <CreateTopic postID={props.postID} onClose={onCloseTopic}/>
        ):(
          <button onClick={postTopic}>New Topic</button>
        )}
      </div>

      <div>
        {topics.map(item=><div key={item.id}>
          <div>
            <a href={`/forum/topic?id=${item.id}`}>Topic:{item.name}</a>
          </div>
          <QuillContent content={String(item.content)} />
        </div>)}
      </div>
    </div>
    </Fragment>
  );
}
//<button onClick={()=>btntest()} > Testing...</button>