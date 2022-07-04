/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";
import { axiodapi } from "../libs/query.ts"
import NavMenu from "./NavMenu.tsx"

type Contact={
  _id:string;
  friendName:string;
}

export default function Page() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [alias, setAlias] = useState("");

  function inputAlias(e:Event){
    if (e.target instanceof HTMLInputElement) {
      setAlias(e.target.value);
    }
  }
  
  useEffect(()=>{
    getContacts();
  },[])

  function getContacts(){
    axiodapi.get("/contact")
    .then( (response) => {
      // handle success
      console.log(response);
      if(response.status==200){
        setContacts(response?.data?.contacts)
      }
    })
    .catch( (error) => {
      // handle error
      console.log(error);
    })
  }

  function addContact(){
    //console.log("Hello World")
    axiodapi.post("/contact",{
      api:"ADD",
      alias:alias
    })
    .then( (response) => {
      // handle success
      console.log(response);
      //getContacts()
      if(response.status==200){
        //setContacts(response?.data?.contacts)
        //need to fix later?
        console.log(response?.data)
        const friendname:string =response?.data.friendName;
        const id:string =response?.data.id;
        setContacts([...contacts,{
          _id:id,
          friendName:friendname
        }])

        /*
        setContacts((state:any[])=>[
          ...state, 
          {
            _id:id,
            friendName:friendname
          }
        ])
        */
      }
    })
    .catch( (error) => {
      // handle error
      console.log(error);
    })
  }

  function removeContact(){
    //console.log("Hello World")
    axiodapi.post("/contact",{
      api: "REMOVE",
      alias: alias
    })
    .then( (response) => {
      // handle success
      console.log(response);
      if(response.status==200){
        //setContacts(response?.data?.contacts)
        console.log(response?.data)
        setContacts(state=>state.filter(item=>item.friendName!=response?.data?.alias))
      }
    })
    .catch( (error) => {
      // handle error
      console.log(error);
    })
  }

  function selectAlias(e:Event){
    //console.log("select alias?")
    //console.log(e.target.value)
    if (e.target instanceof HTMLSelectElement) {
      console.log(e.target.value)
      setAlias(e.target.value);
    }
  }

  return (
    <div>
      <NavMenu/>
      <label>Alias Contact:</label>
      <input type="text" value={alias} onInput={inputAlias}/>

      <button onClick={()=>addContact()} > Add</button>
      <button onClick={()=>removeContact()} > Remove</button>
      <select value={alias} onInput={selectAlias}>
        <option> Hello </option>
        {contacts.map(item =><option key={item._id} value={item.friendName}> {item.friendName} </option>)}
      </select>
    </div>
  );
}