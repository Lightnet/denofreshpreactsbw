/*
  License: MIT
  Created by: Lightnet
*/

// https://fresh.deno.dev/docs/getting-started/fetching-data
// https://stackoverflow.com/questions/70644130/ctx-cookies-set-vs-setcookies-in-deno-std
// https://github.com/lucacasonato/freshworkshop/blob/main/routes/settings.tsx#L13-L24
// https://github.com/lucacasonato/freshworkshop/blob/main/routes/_middleware.ts#L12
// https://doc.deno.land/https://deno.land/std@0.146.0/http/cookie.ts/~/deleteCookie
// https://medium.com/deno-the-complete-reference/handling-cookies-in-deno-df42df28d222

//import { User } from "../../database.ts"
//import {encode, decode} from "https://deno.land/std/encoding/base64.ts";
import { HandlerContext } from "$fresh/server.ts";
import { 
  //setCookie, 
  deleteCookie,
  //getCookies,
} from "https://deno.land/std/http/cookie.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  
  console.log("sign out!")
  function test(){}
  await test();
  //need to check token database to clear

  const body1 = JSON.stringify({api:'LOGOUT'});
  const resp = new Response(body1);
  deleteCookie(
    resp.headers,
    'token',
    {
      path:"/" //need this to delete cookie
    })
  return resp;
};