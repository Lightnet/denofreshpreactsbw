/*
  License: MIT
  Created by: Lightnet

  Information:
    Message query
*/

import { HandlerContext } from "$fresh/server.ts";
import { Message, User } from "../../../database.ts"
import { genKey, checkJWT} from "../../../libs/helper.ts";
import { getCookies } from "https://deno.land/std/http/cookie.ts";
import { config } from "dotenv";

const { TOKENKEY } = config();

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {

  //console.log(_req)
  //console.log(_ctx)

  //check token
  const cookies = getCookies(_req.headers);
  const key = await genKey(TOKENKEY);
  const token = await checkJWT(key,cookies.token)
  let userID = "";

  if(token){
    console.log("PASS");
    userID = token.id
  }else{
    console.log("INVALIDTOKEN")
    const body = JSON.stringify({
      API:"INVALIDTOKEN"
    });
    return new Response(body);
  }
  if(_req.method==="POST"){
    const data = await _req.json()
    console.log(data)
    if(data.api=="SEND"){
      const message = await Message.findOne({userID:userID});

      const newMessage = await Message.insertOne({
        id:crypto.randomUUID(),
        userID:userID,
        alias:data.alias,
        recipientID:userID,
        recipient:data.alias,
        subject:data.subject,
        content:data.content,
        created:Date.now()
      })
      console.log(newMessage)

      const body = JSON.stringify({
        API:"SENT"
      });
      return new Response(body);
    }
  }else if(_req.method==="GET"){
    const messages = await Message.find({recipientID:userID}).toArray();
    const body = JSON.stringify({
      API:"MESSAGES",
      messages:messages
    });
    return new Response(body);
  }else if(_req.method==="DELETE"){
    console.log("DELETE")
    const data = await _req.json()
    console.log(data);
    //const id = `objectId("${data.id}")`;
    const id = data.id;
    const queryDelete = await Message.deleteOne({id: id});
    console.log("queryDelete")
    console.log(queryDelete)


    const body = JSON.stringify({
      API:"DELETE",
      id:data.id
    });
    return new Response(body);
  }else{
    const body = JSON.stringify({
      API:"METHODERROR"
    });
    return new Response(body);
  }
  const body = JSON.stringify({
    API:"ERROR"
  });
  return new Response(body);
};