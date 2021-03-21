import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";

export function Navbar() {
  const router = useRouter();
  const current = router.pathname;

  let dataNavbar;

  Cookies.get("token")
    ? (dataNavbar = [
        {
          id: 1,
          name: "Home",
          route: "/",
        },
        {
          id: 2,
          name: "Create News",
          route: "/create-news",
        },
        {
          id: 3,
          name: "Logout",
          route: "/logout",
        },
      ])
    : (dataNavbar = [
        {
          id: 1,
          name: "Home",
          route: "/",
        },
        {
          id: 2,
          name: "Create News",
          route: "/create-news",
        },
        {
          id: 3,
          name: "Login",
          route: "/login",
        },
      ]);

  return (
    <div className="bg-green-primary">
      <header className="evenElement flex justify-center px-7 py-4 container  mx-auto">
        {dataNavbar.map((i) => (
          <Link key={i.id} href={i.route}>
            <h1
              key={i}
              className={`${
                i.route === current ? `border-b-8` : `border-t-8`
              }  p-1 px-2 font-sans text-red-primary text-xl md:text-2xl cursor-pointer rounded-md border-dark-blue-primary border-opacity-25 border-2`}
            >
              {i.name}
            </h1>
          </Link>
        ))}
      </header>
    </div>
  );
}
