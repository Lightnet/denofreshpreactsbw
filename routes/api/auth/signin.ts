/*
  License: MIT
  Created by: Lightnet
*/

// https://fresh.deno.dev/docs/getting-started/fetching-data
// https://stackoverflow.com/questions/70644130/ctx-cookies-set-vs-setcookies-in-deno-std
// https://github.com/lucacasonato/freshworkshop/blob/main/routes/settings.tsx#L13-L24
// https://github.com/lucacasonato/freshworkshop/blob/main/routes/_middleware.ts#L12
// https://medium.com/deno-the-complete-reference/handling-cookies-in-deno-df42df28d222

import { HandlerContext } from "$fresh/server.ts";
import { User } from "../../../database.ts"
import { setCookie } from "https://deno.land/std/http/cookie.ts";
//import {encode, decode} from "https://deno.land/std/encoding/base64.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import {genKey,getJWT} from "../../../libs/helper.ts"
import { config } from "dotenv";

const { TOKENKEY } = config();

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  
  console.log("login...")
  
  if(_req.method === "POST"){
    console.log("POST!")
  }else{
    const body1 = JSON.stringify({api:'NOTPOST'});
    return new Response(body1);
  }

  const data = await _req.json(); //json post
  //console.log(data)
  const user1 = await User.findOne({ alias: data.alias });
  if(user1){
    //console.log(user1)
    //console.log("FOUND!")
    const result = bcrypt.compareSync(data.passphrase,user1.hash);
    //console.log("passphrase:",result)

    if(result==true){
      //console.log(crypto.randomUUID())
      const key = await genKey(TOKENKEY);
      console.log(Date.now())
      const tokenData = {
        uuid: crypto.randomUUID(),
        id: user1.userID,
        alias: user1.alias,
        //exp: Date.now() + 60*60
        exp: Date.now()
      };
      //const token0 = encode(JSON.stringify(token));
      const jwt= await getJWT(key, tokenData);
      //console.log("token0")
      //console.log(token0)
      const cookie = {
        name: 'token',
        //value: 'cookie_value0',
        //value: token0,
        value: jwt,
        httpOnly: true,
        secure: false,
        path:"/",
        //domain: "http://localhost:3000",
        //expires: new Date(),
      };
      const body1 = JSON.stringify({api:'PASS'});
      const resp = new Response(body1);
      setCookie(resp.headers, cookie);
      return resp;
    }else{
      //PASSPHRASE FAIL
      const body1 = JSON.stringify({api:'PASSFAIL'});
      return new Response(body1);
    }
  }else{
    //USER DOES NOT EXIST
    const body1 = JSON.stringify({api:'NOTEXIST'});
    return new Response(body1);
  }

  //const resp = new Response(body);
  //const cookie = {
    //name: 'denofresh',
    //value: 'cookie_value0',
    //httpOnly: true,
    //secure: false,
    //path:"/",
    //domain: "http://localhost:3000",
    //expires: new Date(),
  //};
  //const headers = new Headers();
  //setCookie(resp.headers, cookie);
  //console.log(_req.headers.get("cookie"))
  //const resp = new Response(body,{ headers });
  //return resp;
};