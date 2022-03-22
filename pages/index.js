import Head from "next/head";
import VideoCard from "../components/videocard";

export default function Home({ surahs }) {
  return (
    <>
      <Head>
        <title>Holy Quran</title>
        <meta
          name="Holy Quran"
          content="Holy Quran is website to remember ALLAH."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="grid sm:grid-cols-2 md:grid-cols-4 gap-3"
        style={{ direction: "rtl" }}
      >
        {surahs.map((e, i) => (
          <VideoCard key={i} title={e.name} link={"/surah/" + e.number} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const promise = await (
    await fetch("http://api.alquran.cloud/v1/surah")
  ).json();
  const { data: surahs } = promise;
  console.log(surahs);
  return {
    props: { surahs: surahs },
  };
}
