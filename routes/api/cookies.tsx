/*
 
 */

import { HandlerContext } from "$fresh/server.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {


  let data0 = {
    text:"test"
  }

  const body = JSON.stringify(data0);
  return new Response(body);
};