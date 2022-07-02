

This is simple way to handle page render.
```ts
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Page() {
  return (
    <Fragment>
      <Head>
        <title> Fresh </title>
        <link rel="stylesheet" href="./styles.css"></link>
      </Head>
      <div> Hello World <div/>
    </Fragment>
  );
}
```