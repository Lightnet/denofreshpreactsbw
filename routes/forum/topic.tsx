/*
  License: MIT
  Created by: Lightnet
  
  Information: 
    This is index page or home page.
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { Head, asset, IS_BROWSER  } from "$fresh/runtime.ts";
import { config } from "dotenv";
import { Handlers, PageProps } from "$fresh/server.ts";
import { 
  //deleteCookie, 
  //setCookie, 
  getCookies 
} from "https://deno.land/std/http/cookie.ts";

import { genKey, checkJWT} from "../../libs/helper.ts";
import PageTopic from "../../islands/PageTopic.tsx"

// https://deno.land/std@0.148.0/node/url.ts?s=parse
import { parse } from "$std/node/url.ts";

interface Data {
  isLogin: boolean;
  userName: string;
  postID:String;
}

const { TOKENKEY } = config();

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    let isLogin = false;
    let userName = "Guest";
    let postID = "";

    const cookies = getCookies(req.headers);
    //console.log(cookies)
    //console.log(req)
    //console.log(await req.json())
    
    //console.log(ctx)
    //console.log(ctx.params)
    
    console.log("req.url")
    console.log(req.url)

    //console.log(parse(req.url,true))
    const data:any = parse(req.url,true,true);
    
    if(cookies.token){
      const key=await genKey(TOKENKEY);
      const token = await checkJWT(key,cookies.token)
      if(token){
        //console.log("VALIDTOKEN")
        userName=token.alias;
        isLogin=true;
        //console.log(data.query?.id)
        if(data.query?.id){
          postID=data.query?.id as string || ""
        }
        
      }
    }
    return ctx.render({ isLogin, userName, postID });
  },
};

export default function Topic({ data }: PageProps<Data>) {
  //console.log(data)
  const {isLogin, userName, postID} = data;
  console.log(data)
  return (
    <Fragment>
      <Head>
        <title>Topic</title>
        <link rel="stylesheet" href={asset("/styles.css")}></link>
      </Head>
      <PageTopic postID={String(postID)} />
    </Fragment>
  );
}
// <PageIndex isLogin={isLogin} userName={userName}/>