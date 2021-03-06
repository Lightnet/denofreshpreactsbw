/*
  License: MIT
  Created by: Lightnet

  information:
    This is for easy access to url when dealing with full url.

*/

import axiod from "axiod";
// Interceptors
// axiod.create([config]);
const axiodapi = axiod.create({
  baseURL: "http://localhost:3000/api/",
  timeout: 1000,
  //headers: { "X-Custom-Header": "foobar" },
});

export {
  axiodapi
}