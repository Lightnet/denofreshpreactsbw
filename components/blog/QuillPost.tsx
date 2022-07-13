/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect, useRef } from "preact/hooks";
import { axiodapi } from "../../libs/queryapi.ts"

export default function Page(props:any) {

  const divEl = useRef(null);

  const [content, setContent] = useState("");
  //const [contentID, setContentID] = useState( "Test" );
  const [contentID, setContentID] = useState(crypto.randomUUID() as string);
  const [editor, setEditor] = useState<any>(null);

  useEffect(()=>{
    if(props.content){
      setContent(props.content);
    }

    return ()=>{
      setContent("");
    }
  },[])

  useEffect(()=>{
    //console.log(content)
    if(content.length!=0){
      //console.log(editor)
    }
  },[content])

  useEffect(()=>{
    //console.log("divEl")
    //console.log(divEl.current)
    if(divEl.current){
      initEditor()
    }
  },[divEl])

  useEffect(()=>{
    
    if(editor){
      //console.log("editor")
      //console.log(editor)
      //console.log(content)
      const data = JSON.parse(content);
      //console.log(data)
      editor.setContents(data.ops)
    }
  },[editor])

  async function initEditor(){
    const Quill = await (await import("quill")).default;
    //console.log("Quill")
    //console.log(Quill)
    //console.log(content);
    //const id = "#"+contentID;
    //const id = "#"+divEl.current.id;
    //console.log(divEl.current.id)
    const qeditor = new Quill( divEl.current, {
      modules: { 
        toolbar: false
      },
      readOnly: true,
      //placeholder: 'Text Editor Here!',
      theme: 'snow',
    })
    //console.log(content)
    //const text= String(content)
    //const value = `<h1>New content here</h1>`
    //const delta = qeditor.clipboard.convert(value)
    //qeditor.insertText(0, 'Hello', 'bold', true);

    //const data = await JSON.parse(text);
    //console.log(data)
    /*
    try{
      
      console.log("data")
      console.log(data)
      qeditor.setContents(data)
    }catch(e){
      console.log("JSON>>>>")
      console.log(e)
    }
    */
    
    //console.log(data)
    //qeditor.setContents(data)
    
    setEditor(qeditor)
  }

  return (
    <div ref={divEl} id={contentID}></div>
  )
}