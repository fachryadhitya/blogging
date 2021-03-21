import Link from "next/link";
import { useEffect, useState } from "react";
import db from "../db.json";
import { getAllNews } from "../services/api";

export default function SmallNews() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const a = await getAllNews();
      setData(a);
    }

    getData();
  }, []);

  return (
    <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-wrap justify-between mt-6">
      {data?.slice(1).map((item, i) => (
        <div key={i} className=" flex flex-col w-full lg:w-45 mb-10">
          <img
            src={item.imageLink}
            alt="img"
            className="max-w-full h-52 rounded-md"
          />
          <p className="mt-3">{item.Date}</p>
          <Link
            href={{
              pathname: "/newsDetail/[id]",
              query: { id: item.id },
            }}
          >
            <h2 className="font-serif cursor-pointer text-2xl leading-6 mt-3 smallClampText">
              {item.title}
            </h2>
          </Link>

          <p className="smallClampText text-lg font-sans leading-7 mt-3">
            {item.paragraph}
          </p>
        </div>
      ))}
    </div>
  );
}
