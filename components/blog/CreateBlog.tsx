/*
  License: MIT
  Created by: Lightnet
*/

// https://github.com/quilljs/quill
/*

quill.setText('Hello\n');
quill.focus();

*/


/** @jsx h */
import { h, Fragment } from "preact";
import { Head, asset, IS_BROWSER  } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";
import { axiodapi } from "../../libs/queryapi.ts"
// import {lazy, Suspense} from 'preact/compat';
// import Quill from "quill";
// quill.enable(false);  // Disables user input

export default function Page(props:any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editor, setEditor] = useState(null);
  
  useEffect(()=>{
    if(IS_BROWSER){
      initEditor();
    }

    return ()=>{
      console.log("CLOSE POST?")
      setEditor(null);
    }
  },[])

  async function initEditor(){
    const Quill = await (await import("quill")).default;
    //console.log("Quill")
    //console.log(Quill)
    const qeditor = new Quill('#editor-container', {
      modules: { 
        //toolbar: '#toolbar'
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block']
        ]
      },
      placeholder: 'Text Editor Here!',
      theme: 'snow',
    })

    qeditor.on('text-change', function(delta:any, oldDelta:any, source:any) {
      if (source == 'api') {
        console.log("An API call triggered this change.");
      } else if (source == 'user') {
        //console.log(delta)
        const txt0 = qeditor.getText(0,qeditor.getLength());
        console.log(txt0)
        const txt = qeditor.getContents(0,qeditor.getLength()); 
        console.log(txt.ops)
        setContent(JSON.stringify(txt))
        console.log("A user action triggered this change.");
      }
    });
    setEditor(qeditor)

  }

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
      if(typeof props.onData === 'function'){
        props.onData(content);
      }
      
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
              <div id="editor-container">
              </div>
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
/*
<td>
              <textarea value={content} onInput={inputContent}></textarea>
            </td>

<div id="toolbar">
              <button class="ql-bold">Bold</button>
              <button class="ql-italic">Italic</button>
            </div>
*/