import React from "react";
import style from "./Output.module.css";

function Output({ powerOn, outputText }) {
  return (
    <div className={style.container}>
      <div>{powerOn ? <div> {outputText}</div> : ""}</div>
    </div>
  );
}

export default Output;
