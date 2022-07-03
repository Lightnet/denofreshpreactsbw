/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import PageEditor  from "../islands/PageEditor.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("editor");
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function Editor() {
  return (
    <Fragment>
      <Head>
        <title>Editor</title>
        <link rel="stylesheet" href="./styles.css"></link>
      </Head>
      <PageEditor/>
    </Fragment>
  );
}
// 