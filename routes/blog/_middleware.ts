/*
  License: MIT
  Created by: Lightnet

  Information:
    Top layer filter current page or document html.

*/

import { MiddlewareHandlerContext } from "$fresh/server.ts";

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext,
) {
  console.log("blog folder...")
  const resp = await ctx.next();
  return resp;
}