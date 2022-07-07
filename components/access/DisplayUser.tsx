/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h , createContext, Component, Fragment } from "preact";
import { useEffect, useState, useContext } from "preact/hooks";
import {AccessContext} from "./AccessProvider.tsx"
//import { IS_BROWSER } from "$fresh/runtime.ts";

export default function ButtonAccess(){
  const {user , setUser} = useContext(AccessContext) as any;

  return (
    <Fragment>
    <label> Hello, {user.length === 0 ? ("Guest"):(user)}</label>
    </Fragment>
  )
}