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
import PageBoard from "../../islands/PageBoard.tsx"

// https://deno.land/std@0.148.0/node/url.ts?s=parse
import { parse } from "$std/node/url.ts";

interface Data {
  isLogin: boolean;
  userName: string;
  postID:string;
}

const { TOKENKEY } = config();

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    let isLogin = false;
    let userName = "Guest";
    let postID = "";

    const cookies = getCookies(req.headers);
    //console.log(cookies)
    const data:any = parse(req.url,true,true);
    if(cookies.token){
      const key=await genKey(TOKENKEY);
      const token = await checkJWT(key,cookies.token)
      if(token){
        //console.log("VALIDTOKEN")
        userName=token.alias;
        isLogin=true;
        if(data.query?.id){
          postID=data.query?.id as string || ""
        }
      }
    }
    return ctx.render({ isLogin, userName, postID });
  },
};

export default function Board({ data }: PageProps<Data>) {
  //console.log(data)
  const {isLogin, userName, postID} = data;
  return (
    <Fragment>
      <Head>
        <title>Board</title>
        <link rel="stylesheet" href={asset("/styles.css")}></link>
      </Head>
      <PageBoard postID={String(postID)}/>
    </Fragment>
  );
}
// <PageIndex isLogin={isLogin} userName={userName}/>