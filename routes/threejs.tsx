/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import PageThreejs from "../islands/PageThreejs.tsx";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    //console.log("index, hello world!");
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function Threejs() {
  return (
    <Fragment>
      <Head>
        <title>Threejs</title>
        <link rel="stylesheet" href="./styles.css"></link>
      </Head>
      <PageThreejs/>
    </Fragment>
  );
}
// 