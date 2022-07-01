/*
  Top layer filter...
*/

import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { Database } from '../database.ts'
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";

export interface State {
  context: Context
}

export class Context {
  private static context: Context

  public constructor() {
    //this.database = new Database('sqlite.db')
    this.database = Database;
  }

  //public static async init() {
    //Context.context = new Context()
  //}
  public static init() {
    Context.context = new Context()
  }

  public static instance() {
    if (this.context) return this.context
    else throw new Error('Context is not initialized!')
  }
}

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  //console.log("middleware")
  const cookies = getCookies(_req.headers);//need to check access
  //console.log(cookies)
  //if (cookies.locale) {//test
    //console.log(cookies.locale)
    //ctx.state.locales.push(cookies.locale);
  //}

  ctx.state.context = Context.instance()
  const resp = await ctx.next();
  return resp;
}