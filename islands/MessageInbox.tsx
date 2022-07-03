/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";


export default function Page() {
  //const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("init")

    return ()=>{
      console.log("clean up")
    }
  },[])

  function getInbox(){

  }

  function deleteMessage(){
    
  }

  return (
    <Fragment>
      <table>
        <tbody>
          <tr>
            <td> Alias: </td>
            <td> Subject: </td>
            <td> Actions: </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}