/*
  License: MIT
  Created by: Lightnet
*/

import { HandlerContext } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/std/http/cookie.ts";
import {Note} from "../../database.ts"
import { genKey, checkJWT} from "../../libs/helper.ts"
import { config } from "dotenv";

const { TOKENKEY } = config();

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {

  const cookies = getCookies(req.headers);
  console.log(cookies)

  if(cookies.token){
    const key=await genKey(TOKENKEY);
    const token = await checkJWT(key,cookies.token)
    if(token){
      //console.log("VALIDTOKEN")
      //notesList=notes;
      if(req.method ==="GET"){
        const notes = await Note.find({userID:token.id}).toArray()
        console.log(notes);
        const body = JSON.stringify({
          api:"NOTES",
          notes:notes
        });
        return new Response(body);
      }else if(req.method ==="POST"){

        const data = await req.json();
        const uuid = crypto.randomUUID();

        const noteID = await Note.insertOne({
          id: uuid,
          userID:token.id,
          content: data.content,
          created: Date.now()
        })
        console.log(noteID);

        const body = JSON.stringify({
          api:"CREATED",
          id:uuid
        });
        return new Response(body);
      }else if(req.method ==="PATCH"){
        const data = await req.json();

        await Note.updateOne({id:data.id},
          {$set:{content:data.content}}
        )

        const body = JSON.stringify({
          api:"UPDATE",
          //id:data.id,
          //content:data.content
        });
        return new Response(body);
      }else if(req.method ==="DELETE"){

        const data = await req.json();
        console.log("DELETE")
        console.log(data);
        const countDelete = await Note.deleteOne({
          id:data.id
        })
        console.log(countDelete)
        
        const body = JSON.stringify({
          api:"DELETE",
          id:data.id
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
      api:"NOTOKEN"
    });
    return new Response(body);
  }
};