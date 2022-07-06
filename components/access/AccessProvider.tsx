/*
  License: MIT
  Created by: Lightnet
*/

// https://codesandbox.io/s/l909km2p5z
// https://preactjs.com/tutorial/06-context/

/** @jsx h */
import { h , createContext, Component } from "preact";
import { useEffect, useState, useMemo } from "preact/hooks";

export const AccessContext = createContext<unknown>({});

export default function AccessProvider(props:any) {
  const [user, setUser] = useState<string>("")

  const auth = useMemo(() => {
    return { user, setUser }
  }, [user])

  return (
    <AccessContext.Provider value={auth}>
       {props.children}
    </AccessContext.Provider>
  )
}

/*
export default class AccessProvider extends Component{
  state = {}
  //doSet = (name, value) => {
    //this.setState({ ...this.state, [name]: value })
  //}
  //console.log("PROPS???");

  render() {
    //console.log("PROPS???")
    const { children, ...value } = this.props;
    //console.log(value);
    const outVal = { ...value, ...this.state }
    //outVal.setGlobal = this.doSet
    //console.log("children")
    //console.log(children)
    return (
      <AccessContext.Provider value={outVal}>{children}</AccessContext.Provider>
    )
  }
}
*/