


/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import UISignUp from "../../islands/UISignUp.tsx"

// https://fresh.deno.dev/docs/concepts/data-fetching
//return new Response("Project not found", { status: 404 });
/*
interface User {
  login: string;
  name: string;
  avatar_url: string;
}
*/

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("GET?")
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
  //POST(_req, ctx) {
    //console.log("POST?")
    //const resp = await fetch(`http://localhost:3000/auth/signup`,{
      //method: 'POST',
      //headers: {
        //'Content-Type': 'application/json'
      //}
    //});

    //const { username } = ctx.params;
    //console.log(ctx)
    //console.log(_req)
    //console.log(_req.body)
    //const params = ctx.params;
    //console.log(params)
    //return ctx.render({test:'text'});
  //},
};

export default function SignUp() {

  const [bSign, setBSign] = useState(true);

  return (
    <div>
      <p>
        Sign Up Page
      </p>
      <UISignUp/>
    </div>
  );
}
