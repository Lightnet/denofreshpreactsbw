/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import PageGroupMessage from "../islands/PageGroupMessage.tsx"
export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("editor");
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function GroupMessage() {
  return (
    <Fragment>
      <Head>
        <title>Group Message</title>
        <link rel="stylesheet" href="./styles.css"></link>
      </Head>
      <PageGroupMessage/>
    </Fragment>
  );
}
// 