/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import PageNovel from "../islands/PageNovel.tsx"

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("contact");
    const resp = await ctx.render();
    //resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Novel</title>
        <link rel="stylesheet" href="./styles.css"></link>
      </Head>
      <PageNovel/>
    </Fragment>
  );
}
// 