/*
  License: MIT
  Created by: Lightnet
*/

import { HandlerContext } from "$fresh/server.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";
import { Board } from "../../../database.ts"

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {

  const {method} = req;
  console.log("method",method)

  const cookies = getCookies(req.headers);
  console.log(cookies)

  

  if(method === "POST"){
    const data = await req.json();
    console.log( data )
    const cuid =await Board.insertOne({
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