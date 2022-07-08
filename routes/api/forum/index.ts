/*
  License: MIT
  Created by: Lightnet
*/

import { HandlerContext } from "$fresh/server.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {

  const cookies = getCookies(_req.headers);
  console.log(cookies)

  const body = JSON.stringify({
    text:"test"
  });
  return new Response(body);
};