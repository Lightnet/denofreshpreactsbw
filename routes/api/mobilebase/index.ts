/*
  License: MIT
  Created by: Lightnet
*/

// MOBILE BASE

import { HandlerContext } from "$fresh/server.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";

import { Homebase } from "../../../database.ts"
import { genKey, checkJWT} from "../../../libs/helper.ts"
import { config } from "dotenv";

const { TOKENKEY } = config();

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {

  const cookies = getCookies(req.headers);
  console.log(cookies);
  if(cookies.token){
    const key=await genKey(TOKENKEY);
    const token = await checkJWT(key,cookies.token)
    if(token){
      if(req.method ==="GET"){
        const homebase = await Homebase.find({userID:token.id}).toArray()
        console.log(homebase);

        const body = JSON.stringify({
          api:"HOMEBASE",
          homebase:homebase
        });
        return new Response(body);
      }else if(req.method ==="POST"){

        const data = await req.json();
        const uuid = crypto.randomUUID();

        //const noteID = await Homebase.insertOne({
          //id: uuid,
          //userID:token.id,
          //content: data.content,
          //created: Date.now()
        //})
        //console.log(noteID);

        const body = JSON.stringify({
          api:"CREATED",
          id:uuid
        });
        return new Response(body);
      }else{
        const body = JSON.stringify({
          api:"ERROR"
        });
        return new Response(body);  
      }
    }else{
      const body = JSON.stringify({
        api:"NOTOKEN"
      });
      return new Response(body);
    }
  }else{
    const body = JSON.stringify({
      api:"NULLTOKEN"
    });
    return new Response(body);
  }

  //const body = JSON.stringify({
    //api:"ERROR"
  //});
  //return new Response(body);
};