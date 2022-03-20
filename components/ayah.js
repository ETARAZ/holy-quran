import convertToArabic from "../utils/convert-to-arabic";
function Ayah({ ayah, number }) {
  console.log(number);
  return (
    <span className="inline leading-[2]">
      {ayah}
      <span className="font-quran">{" " + convertToArabic(number) + " "}</span>
    </span>
  );
}

export default Ayah;
