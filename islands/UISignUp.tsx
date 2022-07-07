/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function UISignup() {
  const [alias, setAlias] = useState("test");
  const [passphrase, setpassphrase] = useState("test");
  const [email, setEmail] = useState("");

  function inputAlias(e:Event){
    if (e.target instanceof HTMLInputElement) {
      setAlias(e.target.value);
    }
  }

  function inputPassphrase(e:Event){
    if (e.target instanceof HTMLInputElement) {
      setpassphrase(e.target.value);
    }
  }

  function inputEmail(e:Event){
    if (e.target instanceof HTMLInputElement) {
      setEmail(e.target.value);
    }
  }

  async function btnRegister(){
    console.log("register")
    const urlSign = `/api/auth/signup`;
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
        email:email,
      })
      
    });
    //const content:any = await rawResponse.json();
  }

  function btnCancel(){
    console.log("Cancel")
    location.assign("/");
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
              <input value={alias} onInput={inputAlias}/>
            </td>
          </tr>
          <tr>
            <td>
              <label> Passphrase: </label>
            </td>
            <td>
              <input value={passphrase} onInput={inputPassphrase}/>
            </td>
          </tr>
          <tr>
            <td>
              <label> Email: </label>
            </td>
            <td>
              <input value={email} onInput={inputEmail}/>
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              
              <span>  </span>
              <a href="/auth/signin">Sign In</a>
              <span> | </span>
              <a href="/auth/forgot">Forgot</a>
              <span> | </span>
              <button onClick={() => btnRegister()}  disabled={!IS_BROWSER}>
                Submit
              </button>
              <span> </span>
              <button onClick={() => btnCancel()}  disabled={!IS_BROWSER}>
                Cancel
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
