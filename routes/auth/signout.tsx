


/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import UISignOut from "../../islands/UISignOut.tsx"
import ButtonTest from "../../islands/ButtonTest.tsx"

export default function SignOut() {

  return (
    <div>
      <p>
        Sign Out Page
      </p>
      <UISignOut/>
    </div>
  );
}
