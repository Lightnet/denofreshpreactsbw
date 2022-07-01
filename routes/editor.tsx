

/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Threejs  from "../islands/PageThreejs.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("editor");
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function Editor() {
  return (
    <div>
      <p>
        Editor
      </p>
      <Threejs/>
    </div>
  );
}
// <WebGLRenderer />
// 