import axios from "axios";

function fetchSurah(surahUrl) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const res = await axios.get(surahUrl);
      resolve(res.data.data);
    }, 200);
  });
}

export default fetchSurah;
