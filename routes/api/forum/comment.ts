/*
  License: MIT
  Created by: Lightnet
*/

import { HandlerContext } from "$fresh/server.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";
import { Comment } from "../../../database.ts"

// https://deno.land/std@0.148.0/node/url.ts?s=parse
import { parse } from "$std/node/url.ts";

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {

  const {method} = req;
  console.log("method",method)

  const cookies = getCookies(req.headers);
  console.log(cookies)

  if(method === "GET"){
    const pData:any = parse(req.url,true,false)
    console.log(pData)
    if(pData.query?.parentid){
      console.log("FOUND SINGLE")
      const comments =await Comment.find({parentID:pData.query.parentid}).toArray()
      console.log(comments)

      const body = JSON.stringify({
        api:"COMMENTS",
        comments:comments
      });
      return new Response(body);
    }
    if(pData.query?.id){
      console.log("FOUND SINGLE")
      const comment =await Comment.findOne({id:pData.query.id})
      console.log(comment)

      const body = JSON.stringify({
        api:"COMMENT",
        comment:comment
      });
      return new Response(body);
    }

    const comments =await Comment.find().toArray()
    //console.log(comments)
    const body = JSON.stringify({
      api:"COMMENTS",
      topics:comments
    });
    return new Response(body);
  }
  

  if(method === "POST"){
    const data = await req.json();
    console.log( data )

    const insertComment = {
      parentID: data.postID || "index",
      id: crypto.randomUUID(),
      userID: "",
      name: data.name,
      content: data.content,
      created: Date.now()
    }

    const cuid =await Comment.insertOne(insertComment)
    console.log(cuid)
    const body = JSON.stringify({
      api:"COMMENT",
      comment:insertComment
    });
    return new Response(body);
  }

  const body = JSON.stringify({
    api:"ERROR"
  });
  return new Response(body);
};