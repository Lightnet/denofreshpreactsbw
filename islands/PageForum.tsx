/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment,  } from "preact";
import { IS_BROWSER, Head } from "$fresh/runtime.ts";
//import { useState } from "preact/hooks";
import NavMenu from "./NavMenu.tsx"
import ForumMain from "../components/forum/Index.tsx"

export default function PageForum() {

  return (
    <Fragment>
      <Head>
        <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"/>
      </Head>
      <div>
        <NavMenu/>
        <ForumMain/>
      </div>
    </Fragment>
  );
}
// <script src="//cdn.quilljs.com/1.3.7/quill.core.js"></script>
// <link href="//cdn.quilljs.com/1.3.7/quill.core.css" rel="stylesheet" />