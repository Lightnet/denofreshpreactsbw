/*
  License: MIT
  Created by: Lightnet
*/

import { HandlerContext } from "$fresh/server.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";
import { Topic } from "../../../database.ts"

// https://deno.land/std@0.148.0/node/url.ts?s=parse
import { parse } from "$std/node/url.ts";

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {

  const {method} = req;
  //console.log("TOPIC method",method)

  const cookies = getCookies(req.headers);
  //console.log(cookies)

  if(method === "GET"){
    //console.log(req)
    const pData:any = parse(req.url,true,false)
    //console.log(pData)
    if(pData.query?.id){
      //console.log("get topic")
      const topic =await Topic.findOne({id:pData.query.id})
      //console.log(topic)
      const body = JSON.stringify({
        api:"TOPIC",
        topic:topic
      });
      return new Response(body);
    }

    if(pData.query?.parentid){
      console.log("get topics")
      const topics =await Topic.find({parentID:pData.query.parentid}).toArray()
      console.log(topics)
      const body = JSON.stringify({
        api:"TOPICS",
        topics:topics
      });
      return new Response(body);
    }

    const topics =await Topic.find().toArray()
    //console.log(topics)

    const body = JSON.stringify({
      api:"TOPICS",
      topics:topics
    });
    return new Response(body);
  }
  
  if(method === "POST"){
    const data = await req.json();
    console.log( data )
    const cuid =await Topic.insertOne({
      parentID: data.parentID || "index",
      id: crypto.randomUUID(),
      userID: "",
      name: data.name,
      content: data.content,
      created: Date.now()
    })
    console.log(cuid)
  }

  const body = JSON.stringify({
    api:"ERROR"
  });
  return new Response(body);
};