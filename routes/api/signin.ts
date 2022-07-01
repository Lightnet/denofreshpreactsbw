

// https://fresh.deno.dev/docs/getting-started/fetching-data
// https://stackoverflow.com/questions/70644130/ctx-cookies-set-vs-setcookies-in-deno-std
// https://github.com/lucacasonato/freshworkshop/blob/main/routes/settings.tsx#L13-L24
// https://github.com/lucacasonato/freshworkshop/blob/main/routes/_middleware.ts#L12

import { HandlerContext } from "$fresh/server.ts";
import { User } from "../../database.ts"
// https://medium.com/deno-the-complete-reference/handling-cookies-in-deno-df42df28d222
// https://deno.land/x/cookies@1.0.0
//import { getCookies } from 'https://deno.land/std/http/cookie.ts';
import { setCookie } from "https://deno.land/std/http/cookie.ts";
import {encode, decode} from "https://deno.land/std/encoding/base64.ts";


export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  //const randomIndex = Math.floor(Math.random() * 10);
  //const body = JOKES[randomIndex];
  console.log("login...")
  if(_req.method === "POST"){
    console.log("POST!")
  }else{
    const body1 = JSON.stringify({api:'NOTPOST'});
    return new Response(body1);
  }

  const data = await _req.json(); //json post
  //console.log(data)
  const user1 = await User.findOne({ name: data.alias });
  if(user1){
    //console.log(user1)
    //console.log("FOUND!")
    if(user1.password == data.passphrase){
      const token = {
        alias:"test"
      };
      const token0 = encode(JSON.stringify(token));
      //console.log("token0")
      //console.log(token0)
      const cookie = {
        name: 'token',
        //value: 'cookie_value0',
        value: token0,
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
    const insertId = await User.insertOne({
      name: "user1",
      password: "pass1",
      email: "",
      phone: "",
      salt: "",
      hash: "",
      token: ""
    });
    //console.log(insertId)
    const body1 = JSON.stringify({api:'CREATED'});
    return new Response(body1);
  }

  //let data0 = {
    //text:"test"
  //}

  //const body = JSON.stringify(data0);
  //console.log(resp)
  //console.log(_req.headers)

  
  //const resp = new Response(body);
  //works
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
  //console.log(_req.headers.cookie)

  /*
  setCookie(_req, {    name: "Name1", 
    value: "Val1",
    httpOnly: true,
    secure: true,
    domain: "deno.land",
    expires: new Date()
  });
  */
  //const resp = new Response(body,{ headers });
  //return resp;
};