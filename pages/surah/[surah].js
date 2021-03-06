import Head from "next/head";
import axios from "axios";
import AudioPlayer from "react-h5-audio-player";
import Ayah from "../../components/ayah";
import fetchSurah from "../../utils/fetch-single-surah";
import { useEffect, useState, useRef } from "react";

function Surah({ data }) {
  return (
    <div className="w-full">
      <Head>
        <title>{data.name}</title>
        <meta name={data.name} content={data.name} />
      </Head>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl  text-center">{data.name}</h2>
        <AudioPlayer className="my-3" src={data.audio} />
      </div>
      <p
        lang="ar"
        className="font-quran p-2 bg-purple-500 text-white  text-3xl  sm:text-4xl md:text-5xl text-center"
        style={{ direction: "rtl" }}
      >
        {data.ayahs.map((ayah, i) => (
          <Ayah key={i} ayah={ayah.text} number={ayah.numberInSurah} />
        ))}
      </p>
    </div>
  );
}

export default Surah;

export const getStaticPaths = async () => {
  const res = await axios.get("http://api.alquran.cloud/v1/surah");
  const { data } = res;
  const paths = data.data.map((surah) => {
    return { params: { surah: surah.number.toString() } };
  });
  return { paths, fallback: false };
};

export async function getStaticProps(context) {
  const { surah } = context.params;

  const data = await fetchSurah("http://api.alquran.cloud/v1/surah/" + surah);
  data["audio"] = `https://www.humariweb.com/quran/abd-ar/${
    surah > 9 ? surah : "0" + surah
  }-(hamariweb.com).mp3`;

  return {
    props: { data },
  };
}
