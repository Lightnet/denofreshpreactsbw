#!/usr/bin/env -S deno run -A --watch=static/,routes/

/*
  License: MIT
  Created by: Lightnet

  Information:
    Fresh set up

*/

import dev from "$fresh/dev.ts";

await dev(import.meta.url, "./main.ts");
