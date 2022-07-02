

/** @jsx h */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("settings");
    const resp = await ctx.render();
    //resp.headers.set("X-Custom-Header", "Hello");
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
      <div>
        <button> Theme </button> 
      </div>      
    </Fragment>
  );
}
// 