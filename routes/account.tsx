/*
  License: MIT
  Created by: Lightnet
  
  Information: 
    This is index page or home page.
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { Head, asset, IS_BROWSER  } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { config } from "dotenv";
import { 
  //deleteCookie, 
  //setCookie, 
  getCookies 
} from "https://deno.land/std/http/cookie.ts";
//import {encode, decode} from "https://deno.land/std/encoding/base64.ts";
import PageAccount from "../islands/PageAccount.tsx"
import { genKey, checkJWT} from "../libs/helper.ts";

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
      //console.log("cookies.token")
      //console.log(cookies.token)
      const token = await checkJWT(key,cookies.token)
      if(token){
        //console.log("VALIDTOKEN")
        userName=token.alias;
        isLogin=true;
      }else{
        console.log("INVALIDTOKEN")
        //clear cookie token
      }
    }
    
    return ctx.render({ isLogin, userName });
  },
};

export default function Home({ data }: PageProps<Data>) {
  console.log(data)
  const {isLogin, userName} = data;

  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href={asset("/styles.css")}></link>
      </Head>
      <PageAccount isLogin={isLogin} userName={userName}/>      
    </Fragment>
  );
}
/*


*/