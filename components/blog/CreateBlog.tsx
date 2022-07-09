/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
import { axiodapi } from "../../libs/queryapi.ts"

export default function Page() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function createBlog(){
    console.log(title)
    console.log(content)
    axiodapi.post("blog",{
      api:"CREATE",
      title:title,
      content:content
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  function clickCancel(){
    
  }

  function inputTitle(e:Event){
    if (e.target instanceof HTMLInputElement) {
      setTitle(e.target.value);
    }
  }

  function inputContent(e:Event){
    //if (e.target instanceof HTMLInputElement) {
    if (e.target instanceof HTMLTextAreaElement) {
      setContent(e.target.value);
    }
  }

  return (
    <div>  
      <label> Create Blog </label>
      <table>
        <tbody>
          <tr>
            <td>
              <label>Title:</label>
            </td>
          </tr>
          <tr>
            <td>
              <input value={title} onInput={inputTitle}/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Content:</label>
            </td>
          </tr>
          <tr>
            <td>
              <textarea value={content} onInput={inputContent}></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={createBlog}> Create </button>
              <button onClick={clickCancel}> Cancel </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
// 