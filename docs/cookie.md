

```ts
import { 
  setCookie, 
  deleteCookie,
  getCookies,
} from "https://deno.land/std/http/cookie.ts";
```

# get cookie Middleware
```ts
export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {

  const cookies = getCookies(_req.headers); //need to check access
  console.log(cookies)

  const resp = await ctx.next();
  return resp;
}
```
# get cookie route
```ts
//route/index.tsx
export const handler:Handlers = {
  GET(_req, ctx) {
    const cookies = getCookies(_req.headers); //need to check access

    console.log(cookies)
    const resp = await ctx.render();
    return resp;
  }
}
```

# get cookie api
```ts
//route/api/echo.tsx
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
}
```


# set cookie
```ts
export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  const cookie = {
    name: 'token',
    //value: 'cookie_value0',
    value: 'token0',
    httpOnly: true,
    secure: false,
    path:"/",
    //domain: "http://localhost:3000",
    //expires: new Date(),
  };
  const body1 = JSON.stringify({api:'PASS'});
  const resp = new Response(body1);
  setCookie(resp.headers, cookie);
  return resp;
};
```


# delete cookie
```ts
export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  
  console.log("sign out!")
  function test(){}
  await test();

  const body1 = JSON.stringify({api:'LOGOUT'});
  const resp = new Response(body1);
  deleteCookie(
    resp.headers,
    'token',
    {
      path:"/" //need this to delete cookie
    })
  return resp;
};
```