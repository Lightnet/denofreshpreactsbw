
// https://fresh.deno.dev/docs/getting-started/fetching-data
// https://deno.land/x/mongo@v0.30.1

import { HandlerContext } from "$fresh/server.ts";
import { User } from "../../database.ts"

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  

  function testw(){
    return 0;
  }

  await testw();

  console.log("Sign Up!")
  if(_req.method === "POST"){
    console.log("POST!")
    console.log(_req);
  }
  //console.log("////////////////////////////////");
  //console.log(_ctx);

  const data = await _req.json(); //json post
  console.log(data)

  //let bFound = false;

  const user1 = await User.findOne({ name: data.name });
  console.log(user1)
  if(user1){
    console.log("FOUND!")
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
    console.log(insertId)
  }

  const testdata = {
    text:"test"
  }

  const body = JSON.stringify(testdata);
  return new Response(body);
};