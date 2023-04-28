import Head from "next/head";
import { useState } from "react";
import Background from "../components/background";
import Container from "../components/container";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const getDark = (isDark) => {
    setDarkMode(isDark);
  };

  return (
    <>
      <Head>
        <title>Hassan Javed - Portfolio</title>
        <meta
          name="description"
          content="Hello, my name is Hassan Javed, a software developer and student living in the UK. Here you can see my journey as a software developer and what I have done in the past."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta
          name="apple-mobile-web-app-title"
          content="Hassan Javed - Portfolio"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://hassanj.dev" />
        <meta name="twitter:title" content="Hassan Javed - Portfolio" />
        <meta
          name="twitter:description"
          content="Hello, my name is Hassan Javed, a software developer and student living in the UK. Here you can see my journey as a software developer and what I have done in the past."
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/92521687?v=4"
        />
        <meta name="twitter:creator" content="@_divizn" />
        <meta property="og:title" content="Hassan Javed - Portfolio" />
        <meta
          property="og:description"
          content="Hello, my name is Hassan Javed, a software developer and student living in the UK. Here you can see my journey as a software developer and what I have done in the past."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/92521687?v=4"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hassan Javed - Portfolio" />
        <meta property="og:url" content="https://hassanj.dev" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`flex h-full w-full flex-col ${darkMode ? "dark" : ""}`}>
        <Background darkMode={darkMode}>
          <Container />
        </Background>
      </div>
    </>
  );
}
