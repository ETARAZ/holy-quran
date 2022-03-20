import React from "react";
import convertToArabic from "../utils/convert-to-arabic";
function Ayah({ ayah, number }) {
  return (
    <span className="inline leading-[2]">
      {ayah}
      <span className="font-quran">{" " + convertToArabic(number) + " "}</span>
    </span>
  );
}

export default Ayah;
