import Image from "next/image";

const CardsTrending = ({ imgTrend, TrendHover, titleTrending }) => {
  return (
    <div className="relative">
      <Image
        src={imgTrend}
        alt={titleTrending}
        className="hover:hidden transition-all absolute rounded-lg"
      />
      <Image
        src={TrendHover}
        alt={titleTrending}
        className="hover:scale-110 transition-all duration-500 rounded-lg"
      />
    </div>
  );
};

export default CardsTrending;
