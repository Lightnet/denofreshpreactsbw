/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
//import * as djwt from "https://deno.land/x/djwt@v2.7/mod.ts";

export default function UILogin() {
  const [alias, setAlias] = useState("test");

  async function btnLogOut(){
    console.log("sign in")
    const urlSign = `/api/signout`;
    //const urlSign = `/auth/signup`;
    const rawResponse = await fetch(urlSign,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        alias:"guest",
      })
      
    });
    const data = await rawResponse.json();
    console.log(data)
    if(data.api){
      if(data.api=="LOGOUT"){
        window.location.assign("/");
      }
    }
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <label> Are you sure Sign out? </label>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <a href="/">Home</a>
              <span> </span>
              <button onClick={() => btnLogOut()} disabled={!IS_BROWSER}>
                Log Out
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
