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
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [hint, setHint] = useState("");
  const [email, setEmail] = useState("");

  async function btnForgot(){
    console.log("register")
    const urlSign = `/api/auth/forgot`;
    console.log(alias);
    
    const rawResponse:any = await fetch(urlSign,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        alias:alias,
        question1:question1,
        question2:question2,
        //email:"tests",
      })
    });
    const content = await rawResponse.json();
    console.log(content)
  }

  function inputAlias(e:Event){
    if (e.target instanceof HTMLInputElement) {
      setAlias(e.target.value);
    }
  }

  function inputQuestion1(e:Event){
    if (e.target instanceof HTMLInputElement) {
      setQuestion1(e.target.value);
    }
  }

  function inputQuestion2(e:Event){
    if (e.target instanceof HTMLInputElement) {
      setQuestion2(e.target.value);
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
              <input value={alias} onInput={inputQuestion1}/>
            </td>
          </tr>
          <tr>
            <td>
              <label> Question 1: </label>
            </td>
            <td>
              <input value={question1} onInput={inputQuestion2}/>
            </td>
          </tr>

          <tr>
            <td>
              <label> Question 2: </label>
            </td>
            <td>
              <input value={question2} onInput={inputAlias}/>
            </td>
          </tr>

          <tr>
            <td>
              <label> Hint: </label>
            </td>
            <td>
              <input value={hint}/>
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <a href="/">Home</a>
              <span> | </span>
              <a href="/auth/signin">Sign In</a>
              <span> | </span>
              <a href="/auth/signup">Sign Up</a>
              <span> | </span>
              <button onClick={() => btnForgot()}>
                Recovery
              </button>

            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
