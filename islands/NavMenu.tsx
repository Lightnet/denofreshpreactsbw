/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h, Fragment } from "preact";
//import { IS_BROWSER } from "$fresh/runtime.ts";
//import { useState } from "preact/hooks";

export default function NavMenu() {

  return (
    <div>
      <a href="/">Home</a> <span> </span>
      <a href="/blog">Blog</a> <span> </span>
      <a href="/account">Account</a> <span> </span>
      <a href="/novel">Novel</a> <span> </span>
      <a href="/forum">Forum</a> <span> </span>
      <a href="/threejs">Threejs</a> <span> </span>
      <a href="/editor">Editor</a> <span> </span>
      <a href="/contact">Contact</a> <span> </span>
      <a href="/message">Message</a> <span> </span>
      <a href="/groupmessage">Group Message</a> <span> </span>
      <a href="/game">Game</a> <span> </span>
      <a href="/chat">Chat</a> <span> </span>
      <a href="/testlab">Test Lab</a> <span> </span>
      <a href="/mobilebase">Mobile Base</a> <span> </span>
      <a href="/settings">Settings</a> <span> </span>
      <a href="/auth/signout">Sign Out</a> <span> </span>
    </div>
  );
}