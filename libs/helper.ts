/*
  License: MIT
  Created by: Lightnet
*/

// https://medium.com/deno-the-complete-reference/sign-verify-jwt-hmac-sha256-4aa72b27042a

//import {encode, decode} from "https://deno.land/std/encoding/base64url.ts";
/*
const key = await crypto.subtle.generateKey(
  {name: "HMAC", hash: "SHA-256"}, 
  false, //extractable
  ["sign", "verify"] //uses
);
*/
//const key = "secret-key";

import {encode as bEnc, decode as bDec} from "https://deno.land/std/encoding/base64url.ts";

const tEnc=(d:string)=>new TextEncoder().encode(d), tDec=(d:Uint8Array)=>new TextDecoder().decode(d);
export const genKey=async (k:string)=>await crypto.subtle.importKey("raw", tEnc(k), {name:"HMAC", hash:"SHA-256"}, false, ["sign", "verify"]);
export const getJWT=async (key:CryptoKey, data:any)=>{
    const payload=bEnc(tEnc(JSON.stringify({alg:"HS256", typ:"JWT"})))+'.'+bEnc(tEnc(JSON.stringify(data)));
    const signature=bEnc(new Uint8Array(await crypto.subtle.sign({name:"HMAC"}, key, tEnc(payload))));
    return `${payload}.${signature}`;
};
export const checkJWT=async (key:CryptoKey, jwt:string)=>{
    const jwtParts=jwt.split(".");
    if(jwtParts.length!==3) return;
    const data=tEnc(jwtParts[0]+'.'+jwtParts[1]);
    if(await crypto.subtle.verify({name:"HMAC"}, key, bDec(jwtParts[2]), data)===true)
        return JSON.parse(tDec(bDec(jwtParts[1])));
};

// https://medium.com/deno-the-complete-reference/sign-verify-jwt-hmac-sha256-4aa72b27042a
//const data={exp: Date.now(), a: 'b', c: 'd', e: 100};
//const key=await genKey("013d3270-b0a0-46f8-9e56-2265ba768e12");
//const jwt=await getJWT(key, data);
//jwt: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzAyNTc4NzY1MTMsImEiOiJiIiwiYyI6ImQiLCJlIjoxMDB9.2EFOA5-sa_taJEEVDaP_xKSA-Nv5IqQYj_-MhmpG1J8

//const data=await checkJWT(key, jwt);
//data: { exp: 1630257876513, a: "b", c: "d", e: 100 }