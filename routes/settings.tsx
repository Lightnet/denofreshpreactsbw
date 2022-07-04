/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import PageSettings from "../islands/PageSettings.tsx"

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("settings");
    const resp = await ctx.render();
    //resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function Settings() {
  return (
    <Fragment>
      <Head>
        <title>Game</title>
        <link rel="stylesheet" href="./styles.css"></link>
      </Head>
      <PageSettings/>      
    </Fragment>
  );
}
// 