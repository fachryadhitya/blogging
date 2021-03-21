import Head from "next/head";
import Home from "../components/Home";
import NewNews from "../components/NewNews";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Create News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home>
        <NewNews />
      </Home>
    </div>
  );
}
