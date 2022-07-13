/*
  License: MIT
  Created by: Lightnet
  
  Information: 
    This is index page or home page.
*/

// https://fresh.deno.dev/docs/getting-started/form-submissions
// https://deno.land/x/fresh@1.0.0/www/routes/index.tsx
// https://preactjs.com/guide/v10/components

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
import PageBlog from "../../islands/PageBlog.tsx"

interface Data {
  isLogin: boolean;
  userName: string;
  bPost:boolean;
}

const { TOKENKEY } = config();
//console.log(TOKENKEY)
export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    let isLogin = false;
    let userName = "Guest";
    let bPost = false;

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
        bPost=true;
      }else{
        //console.log("INVALIDTOKEN")
        //clear cookie token
      }
    }
    
    return ctx.render({ isLogin, userName, bPost });
  },
};

export default function Home({ data }: PageProps<Data>) {
  //console.log(data)
  const {isLogin, userName} = data;

  //if(IS_BROWSER){
    //console.log("BROWSER PAGE")
  //}else{
    //console.log("SSR PAGE")
  //}

  return (
    <Fragment>
      <Head>
        <title>Blog</title>
        <link rel="stylesheet" href={asset("/styles.css")}></link>
      </Head>
      <PageBlog {...data}/>
    </Fragment>
  );
}
/*

*/