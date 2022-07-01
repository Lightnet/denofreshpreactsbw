/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Login() {

  const [alias, setAlias] = useState("test");
  const [passphrase, setpassphrase] = useState("test");
  const [email, setEmail] = useState("");

  function btnRegister(){

  }


  return (
    <div>
      <p>
        Forgot Page
      </p>
      <table>
        <tbody>
          <tr>
            <td>
              <label> Alias: </label>
            </td>
            <td>
              <input value={alias}/>
            </td>
          </tr>
          <tr>
            <td>
              <label> Passphrase: </label>
            </td>
            <td>
              <input value={passphrase}/>
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <button onClick={() => btnRegister} disabled={!IS_BROWSER}>
                Sumbit
              </button>
              <span> </span>
              <button onClick={() => btnRegister} disabled={!IS_BROWSER}>
                Cancel
              </button>
              <span>  </span>
              <a href="/auth/signup">Register</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
