```ts

import { Head, asset } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";


```


https://github.com/dragonwocky/deno_tools#fresh_unocss

https://deno.land/x/fresh@1.0.0/src/runtime/head.ts


https://deno.land/x/fresh@1.0.0/src/runtime/utils.ts
```ts
export const IS_BROWSER = typeof document !== "undefined";
```

https://deno.land/x/fresh@1.0.0/src/server/types.ts
```ts
export interface PageProps<T = any> {
```

https://deno.land/x/fresh@1.0.0/src/server/mod.ts

https://deno.land/x/fresh@1.0.0/src/server/render.tsx

https://github.com/lucacasonato/freshworkshop

https://github.com/denoland/dotland/blob/main/options.ts
https://github.com/denoland/dotland/blob/main/main.ts#L48-L50



https://discord.com/channels/684898665143206084/991511118524715139/993907158204813353
```ts
// main.ts
const cms = getCmsSomehow();

const freshOptions: FreshOptions = {};

const ctx = await ServerContext.fromManifest(freshManifest, freshOptions);

// Inject someting onto handler contexts
ctx.inject((handlerCtx) => {
  handlerCtx.state.set("cms", cms)
});

await serve(ctx.handler());

```

```ts
// routes/api/users/[id].ts
export const handler = (req: Request, ctx: HandlerContext): Response => {
  const cms = ctx.state.get("cms");
  const user = await cms.users.findByid(ctx.params.id);
  return new Response.json(user);
};

```

https://discord.com/channels/684898665143206084/991511118524715139/993959257143771267

```
const manifest = {
  routes: {
    "./123456/_middleware.ts": $$,
    "./routes/_middleware.ts": $0,
    "./routes/[name].tsx": $1,
    "./routes/api/joke.ts": $2,
    "./routes/index.tsx": $3,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
};
```