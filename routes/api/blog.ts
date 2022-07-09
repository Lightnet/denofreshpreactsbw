/*
  License: MIT
  Created by: Lightnet
*/

import { HandlerContext } from "$fresh/server.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";
import { Blog } from "../../database.ts"
import { genKey, checkJWT} from "../../libs/helper.ts"
import { config } from "dotenv";

const { TOKENKEY } = config();

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {

  const {method} = req;
  const cookies = getCookies(req.headers);
  console.log(cookies)

  if(method === "GET"){
    const posts = await Blog.find()
    posts.limit(10);
    //console.log(posts)
    const filterPosts = await posts.toArray();
    //console.log(filterPosts)
    const body = JSON.stringify({
      api:"POSTS",
      posts:filterPosts
    });
    return new Response(body);
  }

  if(cookies.token){
    const key=await genKey(TOKENKEY);
    const token = await checkJWT(key,cookies.token)
    if(token){
      if(method === "POST"){
        const data = await req.json();
        console.log( data )
        const cuid =await Blog.insertOne({
          id: crypto.randomUUID(),
          userID: token.id,
          title: data.title,
          content: data.content,
          created: Date.now()
        })
        console.log(cuid)
        const body = JSON.stringify({
          api:"CREATED"
        });
        return new Response(body);
      }
    }
  }else{
    const body = JSON.stringify({
      api:"NOTTOKEN"
    });
    return new Response(body);
  }

  const body = JSON.stringify({
    api:"ERROR"
  });
  return new Response(body);
};