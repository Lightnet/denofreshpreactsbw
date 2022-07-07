/*
  License: MIT
  Created by: Lightnet

  Information:
  Top layer filter current page or document html.

*/

// https://dev.to/thirashapraween/deno-websocket-realtime-chat-app-typescript-16kj
// https://medium.com/deno-the-complete-reference/broadcast-channel-in-deno-f76a0b8893f5
// https://til.simonwillison.net/deno/annotated-deno-deploy-demo
// https://deno.com/blog/every-web-api-in-deno#broadcastchannel
// 
// https://deno.com/deploy/docs/runtime-broadcast-channel
// https://oscarotero.com/deno/ Deno cheat sheet
// deno websocket BroadcastChannel
// https://deno.com/deploy/docs/runtime-sockets
// 
// 

//import {WebSocket, isWebSocketCloseEvent} from "https://deno.land/std/ws/mod.ts";
//import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";

import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { Database } from '../database.ts'
import { wsHandler } from "../libs/wsapi.ts"

//let channel = new BroadcastChannel("chatroom"); //not working yet, unstable

//channel.onmessage = (event: MessageEvent) => {
  // Update the local state when other instances
  // send us a new message.
  //messages.push(event.data);
  //console.log("MSG:",event.data)
//};

export interface State {
  context: Context
}

export class Context {
  private static context: Context
  // deno-lint-ignore no-explicit-any
  database: any;

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
  //console.log("route middleware")
  //console.log(_req)
  //console.log(ctx)
  
  //const cookies = getCookies(_req.headers);//need to check access
  //console.log(cookies)

  //if(true){
    //const myHeaders = new Headers({
      //accept: "application/json",
    //});
    //return new Response("Hello World!",{headers:myHeaders})
  //}

  //chat websocket message
  //console.log(_req.headers.get("upgrade"))
  const respws = wsHandler(_req);
  if(respws){
    return respws;
  }
  // set up context
  ctx.state.context = Context.instance()
  
  const resp = await ctx.next();
  return resp;
}