/*
  License: MIT
  Created by: Lightnet
*/

//import { isWebSocketCloseEvent } from 'https://deno.land/std/ws/mod.ts';

//console.log(_req.headers.get("upgrade"))
// https://oscarotero.com/deno/
// https://doc.deno.land/deno/stable/~/WebSocket

interface BrodcastInterface {
  name: string,
  msg: string
};

let sockets = new Map<string, WebSocket>();

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

  //console.log("server ws:",data)
  //ws.send(data as string);

  eventBrodcasterS(data);
}

function onClose(uid:string){
  console.log("CLOSE!")
  sockets.delete(uid)
}

//SOCKET BROADCAST
const eventBrodcaster = (obj: BrodcastInterface) => {
  sockets.forEach((ws: WebSocket) => {
    ws.send(JSON.stringify(obj));
  });
}

const eventBrodcasterS = (obj: string) => {
  sockets.forEach((ws: WebSocket) => {
    ws.send(obj);
  });
}

export function wsHandler(req:Request){
  if(req.headers.get("upgrade")==="websocket"){
    console.log("FOUND! upgrade")
    console.log(req.headers.get("upgrade"))
    const { socket: ws, response } = Deno.upgradeWebSocket(req);
    const uid = crypto.randomUUID();
    sockets.set(uid,ws);
    //if(isWebSocketCloseEvent(ws)){
      //console.log("delete")      
    //}

    ws.onopen = () => handleConnected();
    //ws.onmessage = (m) => handleMessage(ws, m.data);
    ws.onmessage = (m) => {
      console.log("//////////////////////////")
      console.log(m)
      handleMessage(ws, m.data)
    };
    //ws.onclose = () => logError("Disconnected from client ...");
    ws.onclose = () => {
      onClose(uid);
      logError("Disconnected from client ...")
    };
    ws.onerror = (e) => handleError(e);
    return response;
  }else{
    return null;
  }
}