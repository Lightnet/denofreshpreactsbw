/*
  License: MIT
  Created by: Lightnet
*/

// https://lukelowrey.com/css-variable-theme-switcher/

/** @jsx h */
import { h, Fragment } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";

export default function ButtonTheme() {

  //if(IS_BROWSER){
    //console.log("CLIENTB")
  //}else{
    //console.log("SERVERB")
  //}

  useEffect(()=>{
    const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (storedTheme)
      document.documentElement.setAttribute('data-theme', storedTheme)
  },[])

  function toggleTheme(){
    console.log("Hello World")
    
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";
    if (currentTheme === "light") {
      targetTheme = "dark";
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
    
  }

  return (
    <button onClick={toggleTheme}> Theme</button>
  );
}