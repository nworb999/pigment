import React, { useState, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <>
        <Head>
          <title>pigment</title>
          <link rel="icon" href="/public/favicon.png" type="image/png" />
          <link rel="stylesheet" href="/styles/globals.css" />
        </Head>

        <Script src="/src/triggerAudio.js" strategy="lazyOnload"></Script>
        <audio id="myAudio" loop>
          <source src="/public/grunt.wav" type="audio/wav" />
          your browser does not support the audio element :(
        </audio>

        <h1>welcome to pigment</h1>

        <form method="POST" id="colorForm" className="audio-trigger">
          <label htmlFor="colorInput">choose your color</label>
          <input
            type="text"
            name="pigColor"
            placeholder="pink"
            id="colorInput"
            required
            className="audio-trigger"
          />
        </form>
        <button type="submit" form="colorForm" className="audio-trigger">
          submit
        </button>
      </>
    )
  );
};

export default Index;
