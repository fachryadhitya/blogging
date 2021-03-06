import Head from "next/head";
import Home from "../components/Home";
import BigNews from "../components/BigNews";
import SmallNews from "../components/SmallNews";

export default function Index() {
  return (
    <div>
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home>
        <BigNews />
        <SmallNews />
      </Home>
    </div>
  );
}
