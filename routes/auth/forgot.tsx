/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import UIForget from "../../islands/UIForgot.tsx"

export default function Login() {

  return (
    <div>
      <p>
        Forgot Page
      </p>
      <UIForget/>
    </div>
  );
}
