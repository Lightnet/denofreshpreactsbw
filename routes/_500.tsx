/*
  License: MIT
  Created by: Lightnet

  Information:
    Fresh api config

*/

/** @jsx h */
import { h } from "preact";
import { ErrorPageProps } from "$fresh/server.ts";

export default function Error500Page({ error }: ErrorPageProps) {
  return <p>500 internal error: {(error as Error).message}</p>;
}