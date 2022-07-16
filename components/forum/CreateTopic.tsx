/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";
import { axiodapi } from "../../libs/queryapi.ts"

export default function CreateBoard(props:any) {

  const [boardName, setBoardName] = useState("");
  const [boardContent, setBoardContent] = useState("");
  const [editor, setEditor] = useState(null);
  const [parentID, setParentID] = useState();

  useEffect(()=>{
    if(props.parentID){
      setParentID(props.parentID)
    }
    if(props.postID){
      setParentID(props.postID)
    }
  },[props])

  useEffect(()=>{
    initEditor();
  },[])

  function queryCreateBoard(){
    axiodapi.post("/forum/topic",{
      api:"CREATE",
      parentID:parentID,
      name:boardName,
      content:boardContent
    }).then((response)=>{
      console.log(response)
      clickCLose();
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  function inputName(e:Event){
    if (e.target instanceof HTMLInputElement) {
      setBoardName(e.target.value);
    }
  }

  function inputContent(e:Event){
    if (e.target instanceof HTMLInputElement) {
      setBoardContent(e.target.value);
    }
  }

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
        //const txt0 = qeditor.getText(0,qeditor.getLength());
        //console.log(txt0)
        const txt = qeditor.getContents(0,qeditor.getLength()); 
        //console.log(txt.ops)
        setBoardContent(JSON.stringify(txt))
        //console.log("A user action triggered this change.");
      }
    });
    setEditor(qeditor)
  }

  function clickCLose(){
    if(typeof props.onClose === 'function'){
      props.onClose();
    }
  }
  // <textarea value={boardContent} onInput={inputContent}/>
  return (
    <div>
      <div>
        <label>Create Topic</label>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Parent:</label>
                <select>
                  <option value="index"> Index </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>Title Name:</label><input value={boardName} onInput={inputName}/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Content:</label>
              </td>
            </tr>
            <tr>
              <td>
                <div id="editor-container"></div>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={queryCreateBoard}>Submit</button>
                <button onClick={clickCLose}>Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
//<button onClick={()=>btntest()} > Testing...</button>