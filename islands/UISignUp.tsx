/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function UISignup() {
  const [alias, setAlias] = useState("test");
  const [passphrase, setpassphrase] = useState("test");
  const [email, setEmail] = useState("");

  async function btnRegister(){
    console.log("register")
    const urlSign = `/api/signup`;
    //const urlSign = `/auth/signup`;
    const rawResponse:any = await fetch(urlSign,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        alias:alias,
        passphrase:passphrase,
        email:"tests",
      })
      
    });
    //const content:any = await rawResponse.json();


  }

  return (
    <div>
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
              <button onClick={() => btnRegister()}>
                Submit
              </button>
              <span> </span>
              <button onClick={() => btnRegister()}>
                Cancel
              </button>
              <span>  </span>
              <a href="/auth/signin">Login</a>
              <span> | </span>
              <a href="/auth/forgot">Forgot</a>

            </td>
          </tr>
        </tbody>
      </table>

      
    </div>
  );
}
