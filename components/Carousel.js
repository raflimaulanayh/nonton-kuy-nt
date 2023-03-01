import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import Image from "next/image";
import Jalangkung from "../public/jalangkung.png";
import Wakanda from "../public/wakanda.png";
import ToyStory from "../public/toy-story.png";

const Carousel = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="">
      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
        }}
      >
        <div className="relative">
          <SwiperSlide>
            <Image src={Jalangkung} alt="jalangkung" />
            <button
              type=""
              className="py-2 bottom-64 left-12 px-4 bg-red-600 hover:bg-opacity-80 rounded-lg text-white font-bold absolute"
            >
              Cek Sekarang
            </button>
          </SwiperSlide>
        </div>
        <SwiperSlide>
          <Image src={ToyStory} alt="Toy Story" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Wakanda} alt="Wakanda Forever" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
