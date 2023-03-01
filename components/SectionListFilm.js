import React from "react";
import FilmPopuler from "./FilmPopuler";
import RilisTerbaru from "./RilisTerbaru";
import Horor from "./Horor";
import AnimasiTerbaru from "./AnimasiTerbaru";

const SectionListFilm = () => {
  return (
    <div>
      <FilmPopuler />
      <RilisTerbaru />
      <Horor />
      <AnimasiTerbaru />
    </div>
  );
};

export default SectionListFilm;
