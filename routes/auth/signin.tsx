/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import UISignIn from "../../islands/UISignIn.tsx";

export default function SignIn() {

  return (
    <div>
      <p>
        Login Page
      </p>
      <UISignIn/>
    </div>
  );
}
