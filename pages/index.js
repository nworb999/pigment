import React, { useState, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import Form from "../components/Form";

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
          <link rel="icon" href="../public/favicon.png" type="image/png" />
        </Head>

        <Script src="/src/triggerAudio.js" strategy="lazyOnload"></Script>
        <audio id="myAudio" loop>
          <source src="/public/grunt.wav" type="audio/wav" />
          your browser does not support the audio element :(
        </audio>

        <h1>welcome to pigment</h1>
        <Form />
      </>
    )
  );
};

export default Index;
