/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function UISignup() {
  const [alias, setAlias] = useState("test");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [email, setEmail] = useState("");

  async function btnForgot(){
    console.log("register")
    const urlSign = `/api/forgot`;
    //const urlSign = `/auth/signup`;
    const rawResponse:any = await fetch(urlSign,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        alias:alias,
        question1:question1,
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
              <label> Question 1: </label>
            </td>
            <td>
              <input value={question1}/>
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <button onClick={() => btnForgot()}>
                Recovery
              </button>
              <span> </span>
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
