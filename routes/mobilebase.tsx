/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import PageMobileBase from "../islands/PageMobileBase.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("editor");
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function MobileBase() {
  return (
    <Fragment>
      <Head>
        <title>Threejs</title>
        <link rel="stylesheet" href="./styles.css"></link>
      </Head>
      <PageMobileBase/>
    </Fragment>
  );
}
// 