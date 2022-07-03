/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

export default function Page() {
  const [count, setCount] = useState(0);

  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [userID, setUserID] = useState("");

  if(IS_BROWSER){
    console.log("CLIENT")
  }else{
    console.log("SERVER")
  }

  function btnSent(){
    console.log("Hello World")
  }

  return (
    <Fragment>
      <table>
        <tbody>
        <tr>
            <td>
              <label>To</label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <td>
              <label>Subject</label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <td>
              <label>Content</label>
            </td>
            <td>
              <textarea />
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