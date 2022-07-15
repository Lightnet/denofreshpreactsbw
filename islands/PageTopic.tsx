/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { IS_BROWSER, Head } from "$fresh/runtime.ts";
import { useState,useEffect } from "preact/hooks";
import CreateComment from "../components/forum/CreateComment.tsx"
import QuillContent from "../components/forum/QuillContent.tsx"
import { axiodapi } from "../libs/queryapi.ts"

type topicProps={
  postID?:string;
}

export default function PageTopic(props:topicProps) {
  const [isCreateComment, setIsCreateComment] = useState(false);

  const [topicInfo, setTopicInfo] = useState<any>({});
  const [content, setContent] = useState<any>("");
  const [comments, setComments] = useState<any[]>([]);
  
  useEffect(()=>{
    console.log(props.postID)
    if(props.postID){
      getTopicInfo(props.postID)
    }
  },[])

  function getTopicInfo(id:string){
    axiodapi.get(`/forum/topic?id=${id}`)
    .then(resp=>{
      console.log(resp)
      //getComments(id)
      if(resp.status ==200){
        if(resp.data?.api){
          if(resp.data?.topic){
            setTopicInfo(resp.data.topic)
            setContent(resp.data.topic.content)
            getComments(id)
          } 
        }
      }
    })
    .catch(error=>{
      console.log(error)
    })
  }

  function getComments(id:string){
    //axiodapi.post("/forum/comment",{
      //postID:id
    //})
    axiodapi.get(`/forum/comment?parentid=${id}`)
    .then(resp=>{
      console.log(resp)
      if(resp.status ==200){
        if(resp.data?.api){
          if(resp.data?.comments){
            setComments(resp.data.comments)
          } 
        }
      }
    })
    .catch(error=>{
      console.log(error)
    })
  }

  function postComment(){
    //console.log("Hello World")
    setIsCreateComment(true)
  }

  function onCloseComment(){
    setIsCreateComment(false)
  }

  return (
    <Fragment>
      <Head>
        <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"/>
      </Head>
    <div>
      <div>
        <label>Topic:{topicInfo.name}</label>
      </div>
      {content && <QuillContent content={String(content)} />}
      
      <div>
        {comments.map(item=><div key={item.id}>
          <div>
            <label>Comment:</label>
          </div>
          <QuillContent content={String(item.content)} />
        </div>)}
      </div>

      {isCreateComment && <CreateComment postID={props.postID} onClose={onCloseComment}/>}
      {!isCreateComment && <div>
      
        <button onClick={postComment}>Post Comment</button>
      </div>}
    </div>
    </Fragment>
  );
}
//<button onClick={()=>btntest()} > Testing...</button>