/*
  License: MIT
  Created by: Lightnet
*/

// https://thewebdev.info/2022/04/23/how-to-loop-and-render-elements-in-react-without-an-array-of-objects-to-map/

/** @jsx h */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { axiodapi } from "../libs/query.ts"

type Message={
  _id:string;
  id:string;
  alias:string;
  subject:string;
}

export default function Page() {
  const [messages, setMessages] = useState([
    //{id:0, name:"test",subject:"tests",content:"test??"}
  ]);

  useEffect(()=>{
    console.log("init")
    //setMessages({...message,{name:"test"}})
    //setMessages(
      //[
        //...messages,
        //{id:1, name:"test",subject:"tests",content:"test??"}
      //]
    //)
    //console.log(messages)
    getInbox();

    return ()=>{
      console.log("clean up")
    }
  },[])

  function getInbox(){
    axiodapi.get("/message")
    .then( (response) => {
      // handle success
      console.log(response);
      if(response.status==200){
        console.log(response?.data?.messages)
        setMessages(response?.data?.messages)
      }
    })
    .catch( (error) => {
      // handle error
      console.log(error);
    })
  }

  function viewMessage(id:string){
    
  }

  function deleteMessage(id:string){
    axiodapi.delete("/message",{
      api:"DELETE",
      id:id
    })
    .then( (response) => {
      // handle success
      console.log(response);
      if(response.status==200){
        console.log(response?.data?.id)
        //setMessages(response?.data?.messages)
        if(response?.data?.id){
          setMessages(messages.filter((item:Message)=>item.id!=response.data.id))
        }
        
      }
    })
    .catch( (error) => {
      // handle error
      console.log(error);
    })
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
          { messages.map((item:Message) => <tr key={item.id}>
            <td> {item.alias} </td>
            <td> {item.subject} </td>
            <td> 
              <button onClick={()=> viewMessage(item.id)}> View </button> 
              <button onClick={()=> deleteMessage(item.id)}> Delete </button> 
            </td>
          </tr>)
          }
        </tbody>
      </table>
    </Fragment>
  );
}