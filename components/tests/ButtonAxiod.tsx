/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { axiodapi } from "../../libs/queryapi.ts"

export default function ButtonAxiod() {

  function clickTest(e:Event){
    //console.log(e)
    //console.log("query url")
    //console.log(axiodapi)
    axiodapi.get('/echo')
    .then((response) => {
      // handle success
      console.log("response");
      console.log(response);
    })
    .catch((error:Error) => {
      // handle error
      console.log("error");
      console.log(error);
    })
    .then(() => {
      // always executed
    });
  }

  useEffect(()=>{
    //console.log("init...")
    return () => {
      // Optional: Any cleanup code
      //console.log("clean up...")
    };
  },[])

  return <button onClick={clickTest}>Test Axiod</button>;
}

