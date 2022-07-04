/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import PageContact from "../islands/PageContact.tsx"

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
        <title>Contact</title>
        <link rel="stylesheet" href="./styles.css"></link>
      </Head>
      <PageContact/>
    </Fragment>
  );
}
// 