/*

  Information: Need to prevent retry spam.
*/

/** @jsx h */
import { h ,Fragment} from "preact";
//import { useState } from "preact/hooks";
import UISignIn from "../../islands/UISignIn.tsx";

export default function SignIn() {

  return (
    <Fragment>
      <UISignIn/>
    </Fragment>
  );
}
