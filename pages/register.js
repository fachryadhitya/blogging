import Head from "next/head";
import Home from "../components/Home";
import RegisterComponent from "../components/Register";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home>
        <RegisterComponent />
      </Home>
    </div>
  );
}
