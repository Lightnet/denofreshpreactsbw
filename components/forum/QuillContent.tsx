/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect, useRef } from "preact/hooks";
//import { axiodapi } from "../../libs/queryapi.ts"

export default function QuillContent(props:any) {

  const divEl = useRef(null);
  const [content, setContent] = useState("");
  const [contentID, setContentID] = useState(crypto.randomUUID() as string);
  const [editor, setEditor] = useState<any>(null);

  useEffect(()=>{
    if(props.content){
      setContent(props.content);
      console.log(props.content)
    }
    return ()=>{
      setContent("");
    }
  },[])

  useEffect(()=>{
    if(divEl.current){
      initEditor()
    }
  },[divEl])

  useEffect(()=>{
    
    if(editor){
      const data = JSON.parse(content);
      editor.setContents(data.ops)
    }
  },[editor])

  async function initEditor(){
    const Quill = await (await import("quill")).default;
    const qeditor = new Quill( divEl.current, {
      modules: { 
        toolbar: false
      },
      readOnly: true,
      //placeholder: 'Text Editor Here!',
      theme: 'snow',
    })
    setEditor(qeditor)
  }

  return (
    <div ref={divEl} id={contentID}></div>
  )
}