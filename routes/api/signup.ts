
// https://fresh.deno.dev/docs/getting-started/fetching-data
// https://deno.land/x/mongo@v0.30.1
// https://deno.land/x/crypto@v0.10.0
// https://deno.land/x/bcrypt@v0.2.4

import { HandlerContext } from "$fresh/server.ts";
import { User } from "../../database.ts"
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {

  console.log("Sign Up!")
  if(_req.method === "POST"){
    console.log("POST!")
    console.log(_req);
    //console.log(_ctx);
  }
  //convert string to json
  const data = await _req.json(); //json post
  //console.log(data)
  //query find if exist name
  const user1 = await User.findOne({ alias: data.alias });
  //console.log(user1)
  if(user1){
    console.log("FOUND!")
    const body = JSON.stringify({api:"EXIST"});
    return new Response(body);
  }else{
    const salt = await bcrypt.genSalt(8);
    const hash = await bcrypt.hash(data.passphrase, salt);

    const insertId = await User.insertOne({
      userID: crypto.randomUUID(),
      alias: data.alias,
      hash: hash,
      email: data.email,
      salt: salt,
      token: "",
      created: new Date().getTime()
    });
    console.log(insertId)

    const body = JSON.stringify({api:"CREATED"});
    return new Response(body);
  }
};