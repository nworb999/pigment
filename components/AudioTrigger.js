import React from "react";
import { useState, useRef } from "react";

function handleClick(filename) {
  const audio = new Audio(filename);
  audio.play();
}

function AudioTrigger({ children, filename }) {
  return <div onClick={() => handleClick(filename)}>{children}</div>;
}

export default AudioTrigger;
