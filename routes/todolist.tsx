/*
  License: MIT
  Created by: Lightnet
*/

// https://fresh.deno.dev/docs/getting-started/fetching-data

/** @jsx h */
import { h, Fragment } from "preact";
//import { useState } from "preact/hooks"
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import PageToDoList from "../islands/PageToDoList.tsx"
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";
import {Note} from "../database.ts"
import { genKey, checkJWT} from "../libs/helper.ts";
import { config } from "dotenv";

type TNote={
  id:string;
  content:string;
 }

type noteProps={
 api:string;
 notes:TNote[];
}

const { TOKENKEY } = config();

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("todolist");
    let notesList:any=[];
    const cookies = getCookies(req.headers);//need to check access
    if(cookies.token){
      const key=await genKey(TOKENKEY);
      //console.log("cookies.token")
      //console.log(cookies.token)

      const token = await checkJWT(key,cookies.token)

      if(token){
        //console.log("VALIDTOKEN")
        //userName=token.alias;
        //isLogin=true;
        const notes = await Note.find({userID:token.id}).toArray()
        console.log(notes);
        notesList=notes;
      }
    }

    const resp = await ctx.render({notes:notesList});
    return resp;
  },
};

export default function ToDoList({ data }: PageProps<noteProps | null>) {
  
  //console.log("data>>>")
  //console.log(data)
  const { notes } = data as noteProps;
  let Notess:any = [];
  if(notes){
    Notess = notes;
  }

  return (
    <Fragment>
      <Head>
        <title>ToDoList</title>
        <link rel="stylesheet" href="./styles.css"></link>
      </Head>
      <div>
        <PageToDoList notes={Notess}/>
      </div>
    </Fragment>
  );
}
/*

*/