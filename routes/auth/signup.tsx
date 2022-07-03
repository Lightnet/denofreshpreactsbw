/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { Head, asset, IS_BROWSER } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import UISignUp from "../../islands/UISignUp.tsx"

// https://fresh.deno.dev/docs/concepts/data-fetching
//return new Response("Project not found", { status: 404 });

export const handler: Handlers = {
  async GET(req, ctx) {
    //console.log("GET?")
    const resp = await ctx.render();
    //resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function SignUp() {

  const [bSign, setBSign] = useState(true);
  console.log("IS_BROWSER:",IS_BROWSER)

  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
        <link rel="stylesheet" href={asset("/styles.css")}></link>
      </Head>
      <UISignUp/>
    </Fragment>
  );
}
