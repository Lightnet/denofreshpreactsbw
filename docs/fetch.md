https://deno.land/x/axiod@0.26.1
https://axios-http.com/docs/example

# import_map.json
  This package handler simalar to npm package.json.

  It can be store package version without need url import to keep it short.
```ts
import { Head, asset, IS_BROWSER } from "https://deno.land/x/fresh@1.0.0/runtime.ts"; //long version

// "$fresh/": "https://deno.land/x/fresh@1.0.0/" from import_map.json
import { Head, asset, IS_BROWSER } from "$fresh/runtime.ts"; //short version

```

# routes/index.tsx
  It is for server side render document.
```ts
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { Head, asset, IS_BROWSER } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

//IS_BROWSER for document check exist or not.
```

```ts
//routes/index.tsx
export default function SignUp() {

  console.log("IS_BROWSER:",IS_BROWSER)
  if(IS_BROWSER){
    console.log("BROWSER"); //will not show in the console log
  }else{
    console.log("SSR");
  }

  return (
    <Fragment>
      <Head>
        <title>Index</title>
        <link rel="stylesheet" href={asset("/styles.css")}></link>
      </Head>
      <div>
        <label> Hello World! </label>
      </div>
    </Fragment>
  );
}
```

```ts
//routes/index.ts
export const handler: Handlers = {
  async GET(req, ctx) { //GET METHOD
    const resp = await ctx.render();
    return resp;
  },
};
```

```ts
//routes/index.ts
export const handler: Handlers = {
  async GET(req, ctx) {
    return new Response("Project not found", { status: 404 });
  },
};
```

```ts
//routes/index.ts
export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};
```

# routes/api/<name>.ts
  Used for http request and response query.
```ts
import { HandlerContext } from "$fresh/server.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";
export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  function test(){
  }
  await test();
  const cookies = getCookies(_req.headers);
  console.log(cookies)

  const body = JSON.stringify({
    text:"test"
  });
  return new Response(body);
};
```

```ts
import { HandlerContext } from "$fresh/server.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";
export const handler = (_req: Request, _ctx: HandlerContext): Response => {

  const cookies = getCookies(_req.headers);
  console.log(cookies)

  const body = JSON.stringify({
    text:"test"
  });
  return new Response(body);
};
```

# island:
  It is for browser client document. For preact components and disallow sub folders. It for fresh.gen.ts to bundle build.