/*
  License: MIT
  Created by: Lightnet
*/

// https://codesandbox.io/examples/package/preact-context
// https://codesandbox.io/s/l909km2p5z?file=/src/index.js:211-225

//not right coding...

/** @jsx h */
import { h , createContext, Component } from "preact";
import { useEffect, useState } from "preact/hooks";

//import { createContext } from "https://esm.sh/v86/preact@10.8.1/src/index";

export const ThreeContext = createContext({});

export class ThreeProvider extends Component{
  state = {}
  //doSet = (name, value) => {
    //this.setState({ ...this.state, [name]: value })
  //}
  render() {
    const { children, ...value } = this.props
    const outVal = { ...value, ...this.state }
    //outVal.setGlobal = this.doSet
    return (
      <ThreeContext.Provider value={outVal}>{children}</ThreeContext.Provider>
    )
  }
}



