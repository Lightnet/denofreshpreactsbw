/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function UILogin() {
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

  async function btnLogin(){
    console.log("sign in")
    const urlSign = `/api/auth/signin`;
    //const urlSign = `/auth/signup`;
    console.log(passphrase);
    const rawResponse = await fetch(urlSign,{
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
    const data = await rawResponse.json();
    console.log(data)
    if(data.api){
      if(data.api=="PASS"){
        window.location.assign("/");
      }
    }
  }

  function btnCancel(){
    console.log("Cancel")
    location.assign("/");
  }
  //<input value={alias}  onInput={(e:Event)=>{setAlias(e.target.value | "")}}/>
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <label> Alias: </label>
            </td>
            <td>
              <input value={alias}  onInput={inputAlias}/>
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
            <td colSpan={2}>
              <a href="/">Home</a>
              <span> | </span>
              <a href="/auth/signup">Register</a>
              <span> | </span>
              <a href="/auth/forgot">Forgot</a>
              <span> | </span>
              <button onClick={() => btnLogin()} disabled={!IS_BROWSER}>
                Login
              </button>
              <span> </span>
              <button onClick={() => btnCancel()} disabled={!IS_BROWSER}>
                Cancel
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
