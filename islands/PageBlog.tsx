/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { Head, asset, IS_BROWSER  } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";
//import NavMenu from "./NavMenu.tsx"

import CreateBlog from "../components/blog/CreateBlog.tsx"
import QueryPosts from "../components/blog/QueryPosts.tsx"

interface dataProps {
  isLogin: boolean;
  userName: string;
  bPost:boolean;
}

export default function Page(props:dataProps) {
  const [isCreatePost, setIsCreatePost] = useState(false);

  //if(IS_BROWSER){
    //console.log("CLIENT")
  //}else{
    //console.log("SERVER")
  //}

  useEffect(()=>{
    console.log(props)
  },[])

  function btnCreatePost(){
    //console.log(isCreatePost)
    setIsCreatePost(state => !state)
  }

  function onData(data:string){
    setIsCreatePost(false)
    location.assign("/blog")
  }

  return (
    <Fragment>
      <Head>
      <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"/>
      <link href="//cdn.quilljs.com/1.3.7/quill.core.css" rel="stylesheet" />
      <script src="//cdn.quilljs.com/1.3.7/quill.core.js"></script>
      </Head>
      <div>
        <h1>Blog</h1>
        {props.bPost && <button onClick={()=>btnCreatePost()} > Create Post</button>}
        
        {isCreatePost && <CreateBlog onData={onData}/>}
        
        <QueryPosts/>
      </div>
    </Fragment>
  );
}