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
// 
// 
// https://deno.com/deploy/docs/runtime-broadcast-channel
// https://oscarotero.com/deno/ Deno cheat sheet
// deno websocket BroadcastChannel
// https://deno.com/deploy/docs/runtime-sockets
// 
// 
// 
// 


//import {WebSocket, isWebSocketCloseEvent} from "https://deno.land/std/ws/mod.ts";
import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { Database } from '../database.ts'
//import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";

interface BrodcastInterface {
  name: string,
  msg: string
};

let sockets = new Map<string, WebSocket>();



//let channel = new BroadcastChannel("chatroom"); //not working yet

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
  //channel.postMessage(data);
  console.log("server ws:",data)
  ws.send(data as string);
}

//SOCKET BROADCAST
const eventBrodcaster = (obj: BrodcastInterface) => {
  sockets.forEach((ws: WebSocket) => {
      ws.send(JSON.stringify(obj));
  });
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
  // https://oscarotero.com/deno/
  // https://doc.deno.land/deno/stable/~/WebSocket
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