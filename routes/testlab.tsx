/*
  License: MIT
  Created by: Lightnet

  Information:
    Test Lab Area
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import PageTestLab  from "../islands/PageTestLab.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    //console.log("TestLab");
    const resp = await ctx.render();
    //resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function TestLab() {
  return (
    <Fragment>
      <Head>
        <title>Test Lab</title>
        <link rel="stylesheet" href="./styles.css"></link>
      </Head>
      <PageTestLab/>
    </Fragment>
  );
}
// 