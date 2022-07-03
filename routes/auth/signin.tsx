/*

  Information: Need to prevent retry spam.
*/

/** @jsx h */
import { h ,Fragment} from "preact";
//import { useState } from "preact/hooks";
import { Head, asset, IS_BROWSER  } from "$fresh/runtime.ts";
import UISignIn from "../../islands/UISignIn.tsx";

export default function SignIn() {

  return (
    <Fragment>
      <Head>
        <title>Sign In</title>
        <link rel="stylesheet" href={asset("/styles.css")}></link>
      </Head>
      <UISignIn/>
    </Fragment>
  );
}
