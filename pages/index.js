import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import ColorForm from "../components/ColorForm";

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const [color, setColor] = useState("");

  const filename = "/grunt.wav";

  const audioFile = useMemo(() => {
    return typeof Audio !== "undefined" ? new Audio(filename) : undefined;
  }, [mounted, filename]);

  const triggerAudio = () => {
    if (audioFile) audioFile.play();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/barnYard?color=${color}`);
  };

  return (
    mounted && (
      <>
        <Head>
          <title>pigment</title>
          <link rel="icon" href="/favicon.png" type="image/png" />
        </Head>

        <h1>welcome to pigment</h1>

        <ColorForm
          color={color}
          setColor={setColor}
          onSubmit={handleSubmit}
          onClick={triggerAudio}
        />
      </>
    )
  );
}
