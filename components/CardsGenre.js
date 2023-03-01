import React from "react";

const CardsGenre = ({ children, imgGenre, titleGenre }) => {
  return (
    <div>
      <img src={imgGenre} alt={titleGenre} />
      <p className="font-medium text-white text-xl text-center pt-5">
        {titleGenre}
      </p>
    </div>
  );
};

export default CardsGenre;
