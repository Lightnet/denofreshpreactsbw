// https://github.com/denoland/dotland/blob/main/options.ts

import { 
  FreshOptions, 
  RenderContext,
  InnerRenderFunction 
} from "$fresh/server.ts";

export default {
  async render(_ctx:RenderContext, render:InnerRenderFunction) {
    //console.log("_ctx")
    //console.log(_ctx)
    console.log(_ctx)

    //console.log("options???")
    await new Promise<void>((r) => r());
    const body = render();
    if (typeof body !== "string") {
      throw new Error("body is missing");
    }
    //console.log(body)
  },
  port: 3000,
  //hostname:'localhost'
} as FreshOptions;