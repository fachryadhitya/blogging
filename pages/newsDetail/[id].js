import Head from "next/head";
import DetailNews from "../../components/DetailNews";
import Home from "../../components/Home";
import { getNewsDetail } from "../../services/api";

export default function newsDetailPages(props) {
  const { News } = props;
  return (
    <div>
      <Head>
        <title>Detail News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home>
        <DetailNews data={News} />
      </Home>
    </div>
  );
}

export async function getServerSideProps(context) {
  const News = await getNewsDetail(context.params.id);

  return {
    props: {
      News,
    },
  };
}
