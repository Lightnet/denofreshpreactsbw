/*
  License: MIT
  Created by: Lightnet
*/

/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { axiodapi } from "../libs/query.ts"

export default function ButtonAxiodRefresh() {

  function clickTest(e:Event){
    //console.log(e)
    console.log("query url")
    //console.log(axiodapi)
    axiodapi.get('/auth/refresh')
    .then((response) => {
      // handle success
      console.log("response");
      console.log(response);
      if(response.status==200){
        console.log(response.data)
      }
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

  return <button onClick={clickTest}>Axiod Refresh</button>;
}

