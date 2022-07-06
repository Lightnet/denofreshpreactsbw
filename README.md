
# denofreshpreactsbw

# License: MIT 

# Packages:
- deno https://fresh.deno.dev/ 
- fresh https://deno.land/x/fresh@1.0.1/
- preact https://esm.sh/preact@10.9.0
- threejs https://esm.sh/three@0.142.0
- mongodb https://deno.land/x/mongo@v0.30.1/mod.ts
- axiod https://deno.land/x/axiod/mod.ts

# Languages:
- typescript (main)
- javascript

# Information:
  Sandbox World Testing.

  Work in progress testing for threejs, simple account, messages, database and other game or logic script. It for testing some basic web page interacting features.

  By using the Fresh framework built on top of Deno runtime for javascript, typescript, server side render (SSR) and preact component. Preact is kept very simple base on React javascript.

  Fresh http server have different way to handle routes page, island and other things simalar to nextjs and nodejs. But it still use javascript and typescript format. https://fresh.deno.dev

# Features:
- Account system
  - signin ( added )
  - signup ( added )
  - signout ( added )
  - forgot ( wip )
  - token ( added / wip )
  - jwt ( added )
  - refresh ( wip )
  - cookie ( added / wip )
- threejs
  - simple scene ( added )
  - editor ( wip )
  - game ( wip )
- chat websocket ( simple / wip )
- message ( wip )
- group message ( wip )
- contact ( wip )
- mobile base ( wip )
- test lab ( testing components )
- to do list ( wip )

# chat websocket:
  Note work on simple chat websocket from demo example base on blog posted.

# Layouts:
- .vscode ( vscode setting ext )
- components ( preact )
- island ( fresh )
- libs ( ts )
- routes ( fresh )
- static ( fresh )
- .env ( variables / keys )
- database.ts ( mongodb )
- deno.json ( simalar to npm cmd )
- dev.ts ( server set up / fresh)
- fresh.gen.ts ( fresh / generated )
- import_map.json ( fresh / packages )
- main.ts ( fresh / config )
- options.ts ( fresh options )

# Design:
  This is for notes.

  Fresh framework is simalar to nextjs. But the logic is different and format but still follow same logic to query http url.

```
  ./routes/index.tsx
```
  This is for server side render page document. Example http://localhost:3000 > index.tsx. But note that the onclick event does not work since it server side render. You can use form to submit button. Used island folder to handle client side. 

  There is handle function call to able to use http request that check for headers and pass to repsonse to the browser client.

  It set up the route name page with server handle request and process like query get/post and cookie if exist that reflect the page changes or access.

```
  ./island/PageIndex.tsx
```
  This is for client side component for browser used. But note the ssr and client call from page to sent to browser client.

```ts
import { IS_BROWSER } from "$fresh/runtime.ts";
```
Use this to handle check for ssr and browser.

# import_map.json 
```json
{
  "imports": {
    "$std/": "https://deno.land/std@0.147.0/",
    "dotenv": "https://deno.land/x/dotenv@v3.2.0/mod.ts",
    "axiod": "https://deno.land/x/axiod/mod.ts",
    "three": "https://esm.sh/three@0.142.0",
    "three/": "https://esm.sh/three@0.142.0/",
    "$fresh/": "https://deno.land/x/fresh@1.0.1/",
    "preact": "https://esm.sh/preact@10.9.0",
    "preact/": "https://esm.sh/preact@10.9.0/",
    "preact-render-to-string": "https://esm.sh/preact-render-to-string@5.2.0?deps=preact@10.9.0"
  }
}
```
This handle import files for ts to reuse without need to edit which version of each files added in script file.
```ts
import { h, Fragment } from "preact";
import { Head, asset, IS_BROWSER  } from "$fresh/runtime.ts";
```

# set up:
  Install deno https://fresh.deno.dev/

## .env

```
SUPABASE_URL=https://<id>.supabase.co
SUPABASE_ANON_KEY=<key>
DATABASE_URL=mongodb://127.0.0.1:27017
TOKENKEY=
REFRESHTOKENKEY=
```

## Command Line:

```cmd
deno task start
```

# refs:
 - https://fresh.deno.dev/
 - https://deno.land/
 - https://deno.com/blog/supabase-functions-on-deno-deploy
 - https://esm.sh/
 - https://deno.land/x