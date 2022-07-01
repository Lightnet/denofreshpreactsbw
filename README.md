
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
  - signin (added)
  - signup (added)
  - signout (added)
  - forgot
  - 
- token

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