/*
  License: MIT
  Created by: Lightnet
*/

// https://threejs.org/docs/#manual/en/introduction/WebGL-compatibility-check
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
/** @jsx h */
import { h, options } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";
import * as THREE from "three";

export default function PageThreejs() {

  // Note server and client is trigger here.
  // threejs require document to work.

  const [count, setCount] = useState(0);
  const [canvasID, setCanvasID] = useState("threejs");
  //const [renderer, setRenderer] = useState({renderer:THREE.WebGLRenderer});
  //const oldHook = options.vnode;
  //console.log(oldHook);
  //options.vnode = vnode => {
    //console.log("Hey I'm a vnode", vnode);
  //}

  //let renderer;
  if(IS_BROWSER){
    //renderer = new THREE.WebGLRenderer();
    console.log("CLIENT")
  }else{
    console.log("SERVER")
  }

  useEffect(() => {

    console.log(window.innerWidth)
    console.log(window.innerHeight)

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const render = new THREE.WebGLRenderer();


    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    render.setSize( window.innerWidth, window.innerHeight );
      console.log("CLIENT??")
      //const render = new THREE.WebGLRenderer();
      //render.setSize( window.innerWidth, window.innerHeight );
      //document.body.appendChild( render.domElement );

      const divElem = document.getElementById(canvasID);
      if(divElem){
        divElem.appendChild( render.domElement );
      }
      
      //animate();
      //setRenderer({renderer:render})
      function animate() {
        requestAnimationFrame( animate );
        render.render( scene, camera );
        cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
      }

      animate();
  }, []);

  
  

  //function btntest(){
    //console.log("Hello World")
  //}

  return (
    <div id={canvasID} style="height:100vh;width:100%;"></div>
  );
}
// <WebGLRenderer />
/*
<button onClick={()=>btntest()} > Testing...</button>
*/