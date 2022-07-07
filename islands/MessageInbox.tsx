/*
  License: MIT
  Created by: Lightnet
*/

// https://thewebdev.info/2022/04/23/how-to-loop-and-render-elements-in-react-without-an-array-of-objects-to-map/

/** @jsx h */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { axiodapi } from "../libs/queryapi.ts"

type TMessage={
  _id:string;
  id:string;
  alias:string;
  subject:string;
  content:string;
}

export default function Page() {
  const [messages, setMessages] = useState<TMessage[]>([
    //{id:0, name:"test",subject:"tests",content:"test??"}
  ]);

  const [isMessage, setIsMessage] = useState(false);
  const [messageID, setMessageID] = useState("");

  const [alias, setAlias] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

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
    setIsMessage(true);
    setMessageID(id);
    const msgData:TMessage = messages.find(item=>item.id==id) as TMessage;
    console.log(msgData);
    if(msgData){
      setAlias(msgData?.alias)
      setSubject(msgData?.subject)
      setContent(msgData?.content)
    }

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
          setMessages(messages.filter((item:TMessage)=>item.id!=response.data.id))
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
      {isMessage == true ?(
             <Fragment>
              <div>
                <label>Alias:</label>{alias}<br/>
                <label>Subject:</label>{subject}<br/>
                <label>Content:</label>{content}<br/>
                <button onClick={()=>{deleteMessage(messageID);setIsMessage(false)}}> Delete </button>
                <button onClick={()=>setIsMessage(false)}> Close </button>
              </div>
            </Fragment>
          ):(
      <table>
        <tbody>
          <tr>
            <td> Alias: </td>
            <td> Subject: </td>
            <td> Actions: </td>
          </tr>
          {messages.map((item:TMessage) => 
          <tr key={item.id}>  
            <td> {item.alias} </td>
            <td> {item.subject} </td>
            <td> 
              <button onClick={()=> viewMessage(item.id)}> View </button> 
              <button onClick={()=> deleteMessage(item.id)}> Delete </button> 
            </td>
          </tr>)}
          

        </tbody>
        </table>
        )}
      
    </Fragment>
  );
}