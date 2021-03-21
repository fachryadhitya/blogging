import Head from "next/head";
import Home from "../components/Home";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useEffect } from "react";
export default function Index() {
  const router = useRouter();
  const logout = () => {
    Cookies.remove("token");
    router.push("/");
  };

  useEffect(() => {
    logout();
  }, []);
  return null;
}
