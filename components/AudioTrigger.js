import React, { useState } from "react";

function AudioTrigger({ children, filename }) {
  const [currentAudio, setCurrentAudio] = useState(null);

  function handleClick() {
    if (currentAudio !== null) {
      console.log({ currentAudio });
      currentAudio.pause();
      console.log({ currentAudio });
    }

    const audio = new Audio(filename);
    console.log({ audio });
    audio.play();
    setCurrentAudio(audio);
  }

  return <div onClick={handleClick}>{children}</div>;
}

export default AudioTrigger;
