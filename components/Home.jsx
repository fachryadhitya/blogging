import { Navbar } from "./Navbar";
import Link from "next/link";

export default function Home({ children }) {
  return (
    <>
      <Navbar />
      <div className="px-6 py-6 min-h-screen bg-light-green-primary pt-10">
        {children}
      </div>
    </>
  );
}
