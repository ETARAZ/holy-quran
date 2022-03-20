import AudioPlayer from "react-h5-audio-player";
import Head from "next/head";
import "react-h5-audio-player/lib/styles.css";
import Ayah from "../../components/ayah";

function Surah({ surah }) {
  return (
    <div className="w-full">
      <Head>
        <title>{surah.name}</title>
        <meta name={surah.name} content={surah.name} />
      </Head>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl  text-center">{surah.name}</h2>
        <AudioPlayer className="my-3" src={surah.audio} />
      </div>
      <p
        lang="ar"
        className="font-quran text-3xl  sm:text-4xl md:text-5xl text-center"
        style={{ direction: "rtl" }}
      >
        {surah.ayahs.map((ayah, i) => (
          <Ayah key={i} ayah={ayah.text} number={ayah.numberInSurah} />
        ))}
      </p>
    </div>
  );
}

export default Surah;

export const getStaticPaths = async () => {
  const res = await fetch("http://api.alquran.cloud/v1/surah");
  const { data } = await res.json();
  const paths = data.map((surah) => {
    return { params: { surah: surah.number.toString() } };
  });
  return { paths, fallback: false };
};

export async function getStaticProps(context) {
  const { surah: singleSurah } = context.params;
  const promise = await (
    await fetch("http://api.alquran.cloud/v1/surah/" + singleSurah)
  ).json();
  const { data: surah } = promise;
  surah["audio"] = `https://www.humariweb.com/quran/abd-ar/${
    surah.number > 9 ? surah.number : "0" + surah.number
  }-(hamariweb.com).mp3`;

  console.log(surah);
  return {
    props: { surah },
  };
}
