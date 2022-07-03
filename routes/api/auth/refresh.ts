/*
  License: MIT
  Created by: Lightnet
*/

import { HandlerContext } from "$fresh/server.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";
import {encode, decode} from "https://deno.land/std/encoding/base64url.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {

  function test(){}
  await test();

  const cookies = getCookies(_req.headers);
  //console.log(cookies)
  //CHECK TOKEN FOR REFRESH TOKEN
  if(cookies.token){
    console.log("FOUND")

    const token = {
      id: "user1.userID",
      alias: "user1.alias",
      uuid: crypto.randomUUID()
    };
    const token0 = encode(JSON.stringify(token));

    const cookie = {
      name: 'refresh',
      //value: 'cookie_value0',
      value: token0,
      httpOnly: true,
      secure: false,
      path:"/",
      //domain: "http://localhost:3000",
      //expires: new Date(),
    };

    const body = JSON.stringify({
      API:"REFRESH"
    });
    const resp = new Response(body);
    setCookie(resp.headers, cookie);
    return resp;
  }else{
    console.log("NOTOKEN")
    const body = JSON.stringify({
      text:"test"
    });
    return new Response(body);
  }
};