/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import PageGame  from "../islands/PageGame.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("editor");
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function Game() {
  return (
    <Fragment>
      <Head>
        <title>Game</title>
        <link rel="stylesheet" href="./styles.css"></link>
      </Head>
      <PageGame/>
    </Fragment>
  );
}
// 