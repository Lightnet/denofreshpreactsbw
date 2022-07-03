/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import PageMessage from "../islands/PageMessage.tsx"

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("editor");
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function Message() {
  return (
    <Fragment>
      <Head>
        <title>Message</title>
        <link rel="stylesheet" href="./styles.css"></link>
      </Head>
      <PageMessage/>
    </Fragment>
  );
}
// 