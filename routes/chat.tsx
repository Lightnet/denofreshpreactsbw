//testing...
// https://github.com/denoland/fresh/issues/347

/** @jsx h */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import PageChat  from "../islands/PageChat.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    //console.log("editor");
    const resp = await ctx.render();
    //resp.headers.set("X-Custom-Header", "Hello");
    //return resp;

    const {socket: ws} = Deno.upgradeWebSocket(req);
    //ws.onmessage=m=>ws.send(m.data);
    return resp;
  },
};

export default function Game() {
  return (
    <Fragment>
      <Head>
        <title>Chat</title>
        <link rel="stylesheet" href="./styles.css"></link>
      </Head>
      <PageChat/>
    </Fragment>
  );
}
// 