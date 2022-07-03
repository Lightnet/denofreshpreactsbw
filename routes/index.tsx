/*
  License: MIT
  Created by: Lightnet
  
  Information: 
    This is index page or home page.
*/
/*
  
*/

// https://fresh.deno.dev/docs/getting-started/form-submissions
// https://deno.land/x/fresh@1.0.0/www/routes/index.tsx
// https://preactjs.com/guide/v10/components

/** @jsx h */
import { h, Fragment } from "preact";
import { Head, asset, IS_BROWSER  } from "$fresh/runtime.ts";
// import { asset, Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { 
  //deleteCookie, 
  //setCookie, 
  getCookies 
} from "https://deno.land/std/http/cookie.ts";
//import {encode, decode} from "https://deno.land/std/encoding/base64.ts";
import PageIndex from "../islands/PageIndex.tsx"
import { genKey, checkJWT} from "../libs/helper.ts";

interface Data {
  isLogin: boolean;
  userName: string;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    let isLogin = false;
    let userName = "Guest";

    const cookies = getCookies(_req.headers);
    //console.log(cookies)
    if(cookies.token){
      const key=await genKey("06e594c9-a772-4d59-a4fb-72d772d6279a");
      console.log("cookies.token")
      console.log(cookies.token)

      const token = await checkJWT(key,cookies.token)
      if(token){
        console.log("VALIDTOKEN")
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
  //console.log(data)
  const {isLogin, userName} = data;

  if(IS_BROWSER){
    console.log("BROWSER")
  }else{
    console.log("SSR")
  }

  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href={asset("/styles.css")}></link>
      </Head>
      <PageIndex isLogin={isLogin} userName={userName}/>
    </Fragment>
  );
}
/*


*/