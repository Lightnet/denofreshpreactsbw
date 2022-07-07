/*
  License: MIT
  Created by: Lightnet

  Information:
    Init http server 

*/

// https://github.com/denoland/dotland/blob/main/main.ts#L48-L50
// https://deno.land/x/fresh@1.0.0/tests/fixture/main.ts
// https://discord.com/channels/684898665143206084/991511118524715139/993907158204813353

/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start, ServerContext } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { serve } from "$std/http/server.ts";
//database set up
import { Context } from './routes/_middleware.ts'
await Context.init()

import options from "./options.ts";
//init server
//await start(manifest, { port: 3000 });
//await start(manifest, options);

//let channel = new BroadcastChannel("channelName");//unstable build

//console.log(crypto.randomUUID())
//alt server
const ctx = await ServerContext.fromManifest(manifest, options);
console.log(Deno.version)
await serve(ctx.handler(),{port:3000});