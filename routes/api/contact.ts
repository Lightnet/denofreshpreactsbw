/*
  License: MIT
  Created by: Lightnet
*/

import { HandlerContext } from "$fresh/server.ts";
import { Contact, User } from "../../database.ts"
import { genKey, checkJWT} from "../../libs/helper.ts";
import { getCookies } from "https://deno.land/std/http/cookie.ts";
export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {

  //check token
  const cookies = getCookies(_req.headers);
  const key = await genKey("06e594c9-a772-4d59-a4fb-72d772d6279a");
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

  console.log(_req.method)
  if(_req.method==="POST"){
    const data = await _req.json()
    //console.log(data)
    //post
    //Contact.findOne({alias:})

    if(data.api == "ADD"){
      console.log("ADD")
      //check if alias exist on current user account
      const contact = await Contact.findOne({userID:userID, friendName:data.alias})
      if(contact){//if exist do not add
        const body = JSON.stringify({
          API:"EXIST"
        });
        return new Response(body);
      }else{//if not exist do add
        const friend = await Contact.insertOne({
          userID:userID,
          friendID:"",
          friendName:data.alias,
          status:"pending",
          created:Date.now()
        })
        
        console.log("friend");
        console.log(friend);
        const body = JSON.stringify({
          API:"ADD",
          _id: friend,
          friendName:data.alias,
        });
        return new Response(body);
      }

    }else if(data.api == "REMOVE"){
      console.log("REMOVE")
      //const contact = await Contact.findOne({userID:userID, friendName:data.alias})

      const friend = await Contact.deleteOne({userID:userID, friendName:data.alias})
      console.log(friend)

      const body = JSON.stringify({
        API:"DELETE",
        alias:data.alias
      });
      return new Response(body);
    }else{
      const body = JSON.stringify({
        API:"CONTACT"
      });
      return new Response(body);
    }
  }else if(_req.method==="GET"){
    //get contact list
    const contacts = await Contact.find({userID:userID}).toArray()
    console.log("contacts");
    //console.log(contacts);

    const body = JSON.stringify({
      API:"CONTACTS",
      contacts:contacts
    });
    return new Response(body);
  }else{
    // error
    const body = JSON.stringify({
      API:"ERROR"
    });
    return new Response(body);
  }
};