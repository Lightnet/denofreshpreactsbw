

/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import PageThreejs from "../islands/PageThreejs.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("index, hello world!");
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function Threejs() {
  return (
    <div>
      <p>
        Threejs
      </p>
      <PageThreejs/>
    </div>
  );
}
// <WebGLRenderer />
// 