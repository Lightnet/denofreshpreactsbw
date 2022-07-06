/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";
import NavMenu from "./NavMenu.tsx"
import axiod from "axiod";

type TNote={
  id:string;
  content:string;
}

type TNoteProps={
  notes:TNote[];
}

export default function Page(props:TNoteProps) {
  //const [count, setCount] = useState(0);
  const [note, setNote] = useState("");
  const [noteID, setNoteID] = useState("");
  const [notes, setNotes] = useState<TNote[]>([]);

  const [noteEdit, setNoteEdit] = useState("");

  useEffect(()=>{
    console.log("props")
    console.log(props)
    if(props.notes){
      setNotes(props.notes)
    }
    
  },[])

  function getNotes(){

  }

  function inputNote(e:Event){
    if(e.target instanceof HTMLInputElement){
      setNote(e.target.value);
    }
  }

  function addNote(){
    axiod.post("/api/todolist",{
      api:"add",
      content:note
    }).then((response)=>{
      console.log("rep")
      console.log(response)
      if(response.data?.api=="CREATED"){
        setNotes((state:TNote[])=>
        [...state,{id:response.data.id,content:note}]
        )
      }
    }).catch((error)=>{
      console.log("error")
      console.log(error)
    })
  }

  function inputEdit(e:Event){
    if(e.target instanceof HTMLInputElement){
      setNoteEdit(e.target.value);
    }
  }

  function toggleEditNote(id:string,text:string){
    if(noteID == id){
      setNoteID("")
    }else{
      setNoteID(id)
      setNoteEdit(text)
    }
  }

  function updateNote(){
    axiod.patch("/api/todolist",{
      api:"PATCH",
      id:noteID,
      content:noteEdit
    }).then((response)=>{
      console.log("rep")
      console.log(response)
      if(response.data?.api=="UPDATE"){
        setNotes(state=>state.map((item)=>{
          if(item.id==noteID){
            return {...item, content:noteEdit}
          }
          return item;
        }))
        setNoteID("")
      }
    }).catch((error)=>{
      console.log("error")
      console.log(error)
    })
  }

  function deleteNote(id:string){
    axiod.delete("/api/todolist",{
      api:"delete",
      id:id,
      content:note
    }).then((response)=>{
      console.log("rep")
      console.log(response)
      if(response.data?.api=="DELETE"){
        setNotes(state=>state.filter(item=>item.id!=response.data?.id))
      }
    }).catch((error)=>{
      console.log("error")
      console.log(error)
    })
  }

  // 
  return (
    <div>
      <NavMenu/> 
      <label>To Do List</label>
      <div>
        <input value={note} name="note" onInput={inputNote}/>
        <button onClick={addNote}> Add </button>
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <label> Notes </label>
            </td>
            <td>
              <label>Action</label>
            </td>
          </tr>
          {notes.map((item:any)=><tr>
            <td>
              {noteID === item.id ? (
                <input value={noteEdit} onInput={inputEdit} />
              ):(
              <label> {item.content} </label>
              )}
            </td>
            <td>
            {noteID === item.id ? (
              <button onClick={()=>updateNote()}> Update </button>
              ):(
              <button onClick={()=>toggleEditNote(item.id,item.content)}> Edit </button>
              )}
              <button onClick={()=>deleteNote(item.id)}> Del </button>
            </td>
          </tr>)}
        </tbody>
        </table>
    </div>
  );
}