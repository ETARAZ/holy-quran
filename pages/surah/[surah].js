import AudioPlayer from "react-h5-audio-player";
import Head from "next/head";
import axios from "axios";
import "react-h5-audio-player/lib/styles.css";
import Ayah from "../../components/ayah";

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
        className="font-quran text-3xl  sm:text-4xl md:text-5xl text-center"
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
  console.log(surah + " worked ");
  const res = await axios.get("http://api.alquran.cloud/v1/surah/" + surah);

  return {
    props: { data: res.data.data },
  };
}
