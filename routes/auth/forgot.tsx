/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment  } from "preact";
//import { useState } from "preact/hooks";
import { Head, asset, IS_BROWSER  } from "$fresh/runtime.ts";
import UIForget from "../../islands/UIForgot.tsx"

export default function Login() {

  return (
    <Fragment>
      <Head>
        <title>Sign In</title>
        <link rel="stylesheet" href={asset("/styles.css")}></link>
      </Head>
      <UIForget/>
    </Fragment>
  );
}
