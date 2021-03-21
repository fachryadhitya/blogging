import Head from "next/head";
import Home from "../components/Home";
import LoginComponent from "../components/Login";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home>
        <LoginComponent />
      </Home>
    </div>
  );
}
