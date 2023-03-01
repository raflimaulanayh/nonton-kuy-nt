import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TitleMovie from "./TitleMovie";
import CardsTrending from "./CardsTrending";

// Part Img Trend
import carsTrend from "../public/imgTrending/cars-trending.png";
import ejenTrend from "../public/imgTrending/ejen-trending.png";
import elementalTrend from "../public/imgTrending/elemental-trending.png";
import howTrend from "../public/imgTrending/how-trending.png";
import marioTrend from "../public/imgTrending/mario-trending.png";
import mummiesTrend from "../public/imgTrending/mummies-trending.png";
import spidermanTrend from "../public/imgTrending/spiderman-trending.png";
import upinTrend from "../public/imgTrending/upin-ipin-trending.png";

// Part Hover
import Hovercars from "../public/imgDetailHover/hover-cars.png";
import Hoverejen from "../public/imgDetailHover/hover-ejen.png";
import Hoverelemental from "../public/imgDetailHover/hover-elemental.png";
import Hoverhow from "../public/imgDetailHover/hover-how.png";
import Hovermario from "../public/imgDetailHover/hover-mario.png";
import Hovermummies from "../public/imgDetailHover/hover-mummies.png";
import Hoverspiderman from "../public/imgDetailHover/hover-spiderman.png";
import Hoverupin from "../public/imgDetailHover/hover-upin-ipin.png";

const AnimasiTerbaru = () => {
  return (
    <section id="trending" className="mx-auto mt-20">
      <div className="">
        <TitleMovie title="Animasi Terbaru" />
        <div className="pl-14">
          <Swiper loop={true} slidesPerView={6} className="-mx-10">
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={carsTrend}
                TrendHover={Hovercars}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={marioTrend}
                TrendHover={Hovermario}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={spidermanTrend}
                TrendHover={Hoverspiderman}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={ejenTrend}
                TrendHover={Hoverejen}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={upinTrend}
                TrendHover={Hoverupin}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={elementalTrend}
                TrendHover={Hoverelemental}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={mummiesTrend}
                TrendHover={Hovermummies}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={howTrend}
                TrendHover={Hoverhow}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AnimasiTerbaru;
