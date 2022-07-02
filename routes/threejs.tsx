

/** @jsx h */
import { h, Fragment } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import PageThreejs from "../islands/PageThreejs.tsx";
import { Head } from "$fresh/runtime.ts";
//import style from "./style.css";

export const handler: Handlers = {
  async GET(req, ctx) {
    //console.log("index, hello world!");
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};
//<link rel="stylesheet" href="/styles.css"></link>
// <p>Threejs</p>
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
// <WebGLRenderer />
// 