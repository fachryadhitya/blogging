import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllNews } from "../services/api";

export default function BigNews() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const res = await getAllNews();
      if (res) {
        setLoading(false);
      }
      setData(res);
    }

    getData();
  }, []);
  return (
    <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto">
      {loading ? (
        <p className="font-bold text-xl text-center">Your news is loading</p>
      ) : (
        <div className="flex flex-col lg:flex-row border-2 border-black border-b-8 rounded-md p-4">
          <img
            src={data[0]?.imageLink}
            alt="img"
            className="max-w-full h:52 lg:h-80 lg:mr-6"
          />

          <div className="flex flex-col mt-3 lg:mt-0">
            <Link
              href={{
                pathname: "/newsDetail/[id]",
                query: { id: data[0]?.id },
              }}
            >
              <h1 className="font-serif text-2xl lg:text-4xl mediumClampText cursor-pointer">
                {data[0]?.title}
              </h1>
            </Link>

            <p className="font-sans text-xl mt-4 bigClampText">
              {data[0]?.paragraph}{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
