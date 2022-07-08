/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
import { axiodapi } from "../../libs/queryapi.ts"

export default function Page(props:any) {

  const [boardName, setBoardName] = useState("");
  const [boardContent, setBoardContent] = useState("");

  function queryCreateBoard(){
    axiodapi.post("/forum/board",{
      api:"CREATE",
      name:boardName,
      content:boardContent
    }).then((response)=>{
      console.log(response)
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

  function clickCLose(){
    if(typeof props.onClose === 'function'){
      props.onClose();
    }
  }
  return (
    <div>
      <div>
        <label>Board</label>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Name:</label><input value={boardName} onInput={inputName}/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Content:</label>
              </td>
            </tr>
            <tr>
              <td>
                <textarea value={boardContent} onInput={inputContent}/>
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