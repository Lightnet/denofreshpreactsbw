

/** @jsx h */
import { h , createContext, Component } from "preact";
import { useEffect, useState } from "preact/hooks";

//import { createContext } from "https://esm.sh/v86/preact@10.8.1/src/index";

export class EObject3D extends Component{


  render() {
    return (
      <slot/>
    )
  }
}



