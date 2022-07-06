/*
  License: MIT
  Created by: Lightnet

  Information:
  Top layer filter current page or document html.

*/

import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { Database } from '../database.ts'
//import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";

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

//websocket handle
function logError(msg: string) {
  console.log(msg);
  //Deno.exit(1);
}
//websocket handle
function handleConnected() {
  console.log("Connected to client ...");
}
//websocket handle
function handleError(e: Event | ErrorEvent) {
  console.log(e instanceof ErrorEvent ? e.message : e.type);
}
//websocket handle
function handleMessage(ws: WebSocket, data: string) {
  //console.log("CLIENT >> " + data);
  //const reply = prompt("Server >> ") || "No reply";
  //if (reply === "exit") {
    //return ws.close();
  //}
  //ws.send(reply as string);
  console.log("server ws:",data)
  ws.send(data as string);
}

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  //console.log("middleware")
  //const { socket, response } = Deno.upgradeWebSocket(_req);
  //console.log(_req)
  //console.log(ctx)
  //console.log(_req.headers)
  
  //const cookies = getCookies(_req.headers);//need to check access
  //console.log(cookies)
  //if (cookies.locale) {//test
    //console.log(cookies.locale)
    //ctx.state.locales.push(cookies.locale);
  //}
  //if(true){
    //const myHeaders = new Headers({
      //accept: "application/json",
    //});
    //return new Response("Hello World!",{headers:myHeaders})
  //}

  //chat message
  //console.log(_req.headers.get("upgrade"))
  if(_req.headers.get("upgrade")==="websocket"){
    console.log("FOUND! upgrade")
    console.log(_req.headers.get("upgrade"))
    const { socket: ws, response } = Deno.upgradeWebSocket(_req);
    ws.onopen = () => handleConnected();
    ws.onmessage = (m) => handleMessage(ws, m.data);
    ws.onclose = () => logError("Disconnected from client ...");
    ws.onerror = (e) => handleError(e);
    return response;
  }

  ctx.state.context = Context.instance()
  
  const resp = await ctx.next();
  return resp;
}