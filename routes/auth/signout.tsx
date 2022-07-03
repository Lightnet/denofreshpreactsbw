/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { useState } from "preact/hooks";
import { Head, asset, IS_BROWSER  } from "$fresh/runtime.ts";
import UISignOut from "../../islands/UISignOut.tsx"

export default function SignOut() {

  return (
    <Fragment>
      <Head>
        <title>Sign Out</title>
        <link rel="stylesheet" href={asset("/styles.css")}></link>
      </Head>
      <UISignOut/>
    </Fragment>
  );
}
