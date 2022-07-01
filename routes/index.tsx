// https://fresh.deno.dev/docs/getting-started/form-submissions
// https://deno.land/x/fresh@1.0.0/www/routes/index.tsx
// https://preactjs.com/guide/v10/components

/** @jsx h */
import { h, Fragment } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";
import {encode, decode} from "https://deno.land/std/encoding/base64.ts";
//import { config } from "https://deno.land/x/dotenv/mod.ts";
//const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = config();
//import { createClient } from 'https://deno.land/x/supabase@1.3.1/mod.ts';
//import * as supabase from "https://deno.land/x/supabase@1.3.1/mod.ts";

interface Data {
  isLogin: boolean;
  userName: string;
}

export const handler: Handlers<Data> = {
  GET(_req, ctx) {
    let isLogin = false;
    let userName = "Guest";

    const cookies = getCookies(_req.headers);
    //console.log(cookies)
    if(cookies.token){
      //console.log("cookies.token")
      //console.log(cookies.token)
      //const token = decode(cookies.token);
      const token = new TextDecoder().decode(decode(cookies.token));
      console.log("token")
      console.log(token)
      const user = JSON.parse(token)
      userName = user.alias;
      isLogin=true;
    }
    
    return ctx.render({ isLogin, userName });
  },
};

export default function Home({ data }: PageProps<Data>) {
  console.log(data)
  const {isLogin, userName} = data;
  return (
      
      <div>
        <p> Welcome {userName}, to Deno and Fresh API </p>
        {isLogin === true && <Fragment>
          <a href="/threejs">Threejs</a> <span> </span>
          <a href="/editor">Editor</a> <span> </span>
          <a href="/game">Game</a> <span> </span>
          <a href="/mobilebase">Mobile Base</a> <span> </span>
          <a href="/auth/signout">Sign Out</a> <span> </span>
        </Fragment>}
        {isLogin === false && <Fragment>
          <a href="/auth/signin">Sign In</a> <span> </span>
          <a href="/auth/signup">Sign Up</a>
        </Fragment>}
      </div>
  );
}
/*


*/