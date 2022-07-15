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
import PageForum from "../../islands/PageForum.tsx"

interface Data {
  isLogin: boolean;
  userName: string;
}

const { TOKENKEY } = config();

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    let isLogin = false;
    let userName = "Guest";

    const cookies = getCookies(_req.headers);
    //console.log(cookies)
    if(cookies.token){
      const key=await genKey(TOKENKEY);
      const token = await checkJWT(key,cookies.token)
      if(token){
        //console.log("VALIDTOKEN")
        userName=token.alias;
        isLogin=true;
      }
    }
    return ctx.render({ isLogin, userName });
  },
};

export default function Board({ data }: PageProps<Data>) {
  //console.log(data)
  const {isLogin, userName} = data;
  return (
    <Fragment>
      <Head>
        <title>Board</title>
        <link rel="stylesheet" href={asset("/styles.css")}></link>
      </Head>
      <PageForum/>
    </Fragment>
  );
}
// <PageIndex isLogin={isLogin} userName={userName}/>