import { FreshOptions } from "$fresh/server.ts";

export default {
  async render(_ctx, render) {
    //console.log("_ctx")
    //console.log(_ctx)

    //console.log("options???")
    await new Promise<void>((r) => r());
    const body = render();
    if (typeof body !== "string") {
      throw new Error("body is missing");
    }
    //console.log(body)
  },
  port: 3000
} as FreshOptions;