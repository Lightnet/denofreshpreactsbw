/*
  License: MIT
  Created by: Lightnet
*/

import { HandlerContext } from "$fresh/server.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";
import { Board } from "../../../database.ts"
// https://deno.land/std@0.148.0/node/url.ts?s=parse
import { parse } from "$std/node/url.ts";

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {

  const {method} = req;
  console.log("method",method)

  const cookies = getCookies(req.headers);
  //console.log(cookies)

  if(method === "GET"){
    const pData:any = parse(req.url,true,false)
    if(pData.query?.id){
      //console.log("FOUND SINGLE")
      const boardInfo =await Board.findOne({id:pData.query.id})
      //console.log(boardInfo)
      const body = JSON.stringify({
        api:"BOARD",
        board:boardInfo
      });
      return new Response(body);
    }

    const boards =await Board.find().toArray()
    //console.log(boards)
    const body = JSON.stringify({
      api:"BOARDS",
      boards:boards
    });
    return new Response(body);
  }
  

  if(method === "POST"){
    const data = await req.json();
    console.log( data )
    const cuid =await Board.insertOne({
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