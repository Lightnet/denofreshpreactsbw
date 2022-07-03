/*
  License: MIT
  Created by: Lightnet
*/

import { HandlerContext } from "$fresh/server.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {

  function test(){}
  await test();

  const cookies = getCookies(_req.headers);
  console.log(cookies)
  if(cookies.token){
    //need to check for verify token
    const body = JSON.stringify({
      API:"TOKEN",
      token:cookies.token
    });
    //send token to client for access
    return new Response(body);
  }else{
    const body = JSON.stringify({
      API:"NOTOKEN"
    });
    return new Response(body);
  }
};