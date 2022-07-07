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
        //const homebase = await Homebase.find({userID:token.id}).toArray()
        const homebase = await Homebase.findOne({userID:token.id})
        console.log(homebase);

        const body = JSON.stringify({
          api:"HOMEBASE",
          homebase:homebase
        });
        return new Response(body);
      }else if(req.method ==="POST"){

        const data = await req.json();
        const uuid = crypto.randomUUID();
        console.log("data")
        console.log(data)

        const homeBaseInfo = {
          id: uuid,
          userID: token.id,
          name: data.name,
          characterID: "",
          characterName: "",
          isProtect: false,
          timeRepair: "",
          location: "",
          x: 0,
          y: 0,
          z: 0,
          created: Date.now()
        }

        await Homebase.insertOne(homeBaseInfo)
        console.log(homeBaseInfo);

        const body = JSON.stringify({
          api:"CREATED",
          homebase:homeBaseInfo
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