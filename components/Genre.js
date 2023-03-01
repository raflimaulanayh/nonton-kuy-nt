import React from "react";
import CardsGenre from "./CardsGenre";
import Horor from "../public/genre-horor.svg";

const Genre = () => {
  return (
    <section className="container mx-auto pt-24">
      <div className="flex justify-between mx-auto w-10/12">
        <CardsGenre imgGenre="/genre-horor.svg" titleGenre="Horor" />
        <CardsGenre imgGenre="/genre-action.svg" titleGenre="Action" />
        <CardsGenre imgGenre="/genre-comedy.svg" titleGenre="Comedy" />
        <CardsGenre imgGenre="/genre-indonesia.svg" titleGenre="Indonesia" />
        <CardsGenre imgGenre="/genre-romance.svg" titleGenre="Romance" />
        <CardsGenre imgGenre="/genre-drakor.svg" titleGenre="Drakor" />
        <CardsGenre imgGenre="/genre-animation.svg" titleGenre="Animation" />
      </div>
    </section>
  );
};

export default Genre;
