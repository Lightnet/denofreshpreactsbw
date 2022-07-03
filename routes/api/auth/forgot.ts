/*
  License: MIT
  Created by: Lightnet
*/

import { HandlerContext } from "$fresh/server.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {

  function test(){}
  await test();

  //const cookies = getCookies(_req.headers);
  //console.log(cookies)

  const body = JSON.stringify({
    API:"FORGOT"
  });
  return new Response(body);
};