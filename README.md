
# denofreshpreactsbw

# License: MIT 

# Packages:
- deno https://fresh.deno.dev/ 
- fresh https://deno.land/x/fresh@1.0.0/
- preact https://esm.sh/preact@10.8.1
- threejs https://esm.sh/three@0.142.0
- mongodb https://deno.land/x/mongo@v0.30.1/mod.ts

# Languages:
- typescript (main)
- javascript

# Information:
  Sandbox World Testing.

  Work in progress testing for threejs, Deno, Fresh and other typescript and javascript.

  Fresh http server have different way to handle page, island and other things simalar to nextjs. Note there different format from nodejs.

  Deno is application to serve typescript and javascript.

# Features:
- Account system
  - signin ( added )
  - signup ( added )
  - signout ( added )
  - forgot
  - token
- threejs
  - simple scene ( added )
  - editor ( wip )
  - game ( wip )
- chat websocket ( on hold )
- message ( wip )
- group message ( wip )
- contact ( wip )
- mobilebase ( wip )
- testlab ( testing components )


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
- main.ts ( fresh / config )
- options.ts ( fresh options )

# Design:
  This is for notes.

  Fresh framework is simalar to nextjs. But the logic is different and format but still follow same logic to query http url.

```
  ./routes/index.tsx
```
  This is for server and client. But note that the onclick event does not work since it server side render. Used island to handle client side.

  This set up the url page application format to keep it simple.

  It set up the page with server handle request and prcoess like check query user and cookie if exist that reflect the page changes or access.

```
  ./island/PageIndex.tsx
```
  This is for client side. Fresh have check browser or ssr.

# set up:
  Install deno https://fresh.deno.dev/

## .env

```
SUPABASE_URL=https://<id>.supabase.co
SUPABASE_ANON_KEY=<key>
DATABASE_URL=mongodb://127.0.0.1:27017

```

## Command Line:

```cmd
deno task start
```

# refs:
 - https://fresh.deno.dev/
 - https://deno.land/
 - https://deno.com/blog/supabase-functions-on-deno-deploy