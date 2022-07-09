/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";
import { axiodapi } from "../../libs/queryapi.ts"

type TPost={
  id:string;
  title:string;
  content:string;
  created:number;
}

export default function Page() {

  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(()=>{
    getPosts();
  },[])

  function getPosts(){
    axiodapi.get("blog")
    .then((response)=>{
      console.log(response)
      if(response.data?.api === "POSTS"){
        setPosts(response.data.posts)
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  function covertTimeToDate(time:number){
    const date = new Date(time);
    console.log(date)
    console.log( date.getTime())
    //return date.getTime();
    //return date.toDateString();
    return date.toDateString() + " " + date.toLocaleTimeString();
  }

  return (
    <div id="posts">
      {posts.map((item)=>
        <div key={item.id}>
          <div>
            <label> Title: {item.title} </label>
          </div>
          <div> Post: </div>
          <div>
            {item.content}
          </div>
          <div>
            <label>{covertTimeToDate(item.created)}</label>
          </div>
        </div>
      )}
    </div>
  )
}