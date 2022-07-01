// https://deno.land/x/fresh@1.0.0/tests/fixture/main.ts

/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
//database set up
import { Context } from './routes/_middleware.ts'
await Context.init()

import options from "./options.ts";
//init server
//await start(manifest, { port: 3000 });
await start(manifest, options);
