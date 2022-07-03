/*
  License: MIT
  Created by: Lightnet
*/

import { HandlerContext } from "$fresh/server.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {

  function test(){
  }
  await test();

  const body = JSON.stringify({
    text:"test"
  });
  return new Response(body);
};