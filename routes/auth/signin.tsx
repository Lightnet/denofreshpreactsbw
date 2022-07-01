/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import UISignIn from "../../islands/UISignIn.tsx";

export default function SignIn() {

  return (
    <div>
      <p>
        Sign In Page
      </p>
      <UISignIn/>
    </div>
  );
}
