import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TitleMovie from "./TitleMovie";
import CardsTrending from "./CardsTrending";

// Part Img Trend
import JalangkungTrend from "../public/imgTrending/jalangkung-trending.png";
import SetanTrend from "../public/imgTrending/setan-trending.png";
import AdamTrend from "../public/imgTrending/adam-trending.png";
import alenaTrend from "../public/imgTrending/alena-trending.png";
import anakTrend from "../public/imgTrending/anak-trending.png";
import kknTrend from "../public/imgTrending/kkn-trending.png";
import kuntilTrend from "../public/imgTrending/kuntil-trending.png";
import maghribTrend from "../public/imgTrending/maghrib-trending.png";
import makmumTrend from "../public/imgTrending/makmum-trending.png";
import puisiTrend from "../public/imgTrending/puisi-trending.png";

// Part Hover
import HoverJalangkung from "../public/imgDetailHover/hover-jalangkung.png";
import Hoveradam from "../public/imgDetailHover/hover-adam.png";
import Hoveralena from "../public/imgDetailHover/hover-alena.png";
import Hoveranak from "../public/imgDetailHover/hover-anak.png";
import Hoverkkn from "../public/imgDetailHover/hover-kkn.png";
import Hoverkuntil from "../public/imgDetailHover/hover-kuntil.png";
import Hovermaghrib from "../public/imgDetailHover/hover-maghrib.png";
import Hovermakmum from "../public/imgDetailHover/hover-makmum.png";
import Hoverpuisi from "../public/imgDetailHover/hover-puisi.png";
import Hoversetan from "../public/imgDetailHover/hover-setan.png";

const RilisTerbaru = () => {
  return (
    <section id="trending" className="mx-auto mt-20">
      <div className="">
        <TitleMovie title="Rilis Terbaru" />
        <div className="pl-14">
          <Swiper loop={true} slidesPerView={6} className="-mx-10">
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={AdamTrend}
                TrendHover={Hoveradam}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={maghribTrend}
                TrendHover={Hovermaghrib}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={puisiTrend}
                TrendHover={Hoverpuisi}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={kuntilTrend}
                TrendHover={Hoverkuntil}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={anakTrend}
                TrendHover={Hoveranak}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={alenaTrend}
                TrendHover={Hoveralena}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={makmumTrend}
                TrendHover={Hovermakmum}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={kknTrend}
                TrendHover={Hoverkkn}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={SetanTrend}
                TrendHover={Hoversetan}
                titleTrending="Setan"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={JalangkungTrend}
                TrendHover={HoverJalangkung}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RilisTerbaru;
