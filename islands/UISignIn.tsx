/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
//import * as djwt from "https://deno.land/x/djwt@v2.7/mod.ts";

export default function UILogin() {
  const [alias, setAlias] = useState("test");
  const [passphrase, setpassphrase] = useState("test");
  const [email, setEmail] = useState("");

  async function btnLogin(){
    console.log("sign in")
    const urlSign = `/api/signin`;
    //const urlSign = `/auth/signup`;
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
        window.location = "/";
      }
    }

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
              <button onClick={() => btnLogin()} disabled={!IS_BROWSER}>
                Login
              </button>
              <span> </span>
              <button onClick={() => btnLogin()} disabled={!IS_BROWSER}>
                Cancel
              </button>
              <a href="/">Home</a>
              <span>  </span>
              <a href="/auth/signup">Register</a>
              <span> | </span>
              <a href="/auth/forgot">Forgot</a>

            </td>
          </tr>
        </tbody>
      </table>

      
    </div>
  );
}
