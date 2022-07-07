/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
import { axiodapi } from "../libs/queryapi.ts"

export default function Page() {
  const [count, setCount] = useState(0);

  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [userID, setUserID] = useState("");

  function inputUserID(e:Event){
    if (e.target instanceof HTMLInputElement) {
      setUserID(e.target.value);
    }
  }

  function inputSubject(e:Event){
    if (e.target instanceof HTMLInputElement) {
      setSubject(e.target.value);
    }
  }

  function inputContent(e:Event){
    if (e.target instanceof HTMLTextAreaElement) {
      setContent(e.target.value);
    }
  }

  if(IS_BROWSER){
    console.log("CLIENT")
  }else{
    console.log("SERVER")
  }

  function btnSent(){
    console.log("Hello World")
    axiodapi.post("/message",{
      api:"SEND",
      alias:userID,
      subject:subject,
      content:content,
    })
  }

  return (
    <Fragment>
      <table>
        <tbody>
          <tr>
            <td>
              <label>To(Alias ID):</label>
            </td>
            <td>
              <input type="text" value={userID} onInput={inputUserID}/>
            </td>
          </tr>

          <tr>
            <td>
              <label>Subject</label>
            </td>
            <td>
              <input type="text" value={subject} onInput={inputSubject}/>
            </td>
          </tr>

          <tr>
            <td>
              <label>Content</label>
            </td>
            <td>
              <textarea value={content} onInput={inputContent}/>
            </td>
          </tr>

          <tr>
            <td>
              <label>Actions</label>
            </td>
            <td>
              <button onClick={()=>btnSent()} > Send</button>
            </td>
          </tr>

        </tbody>
      </table>

    </Fragment>
  );
}