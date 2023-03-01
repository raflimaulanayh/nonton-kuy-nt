import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TitleMovie from "./TitleMovie";
import CardsTrending from "./CardsTrending";

// Part Img Trend
import JalangkungTrend from "../public/imgTrending/jalangkung-trending.png";
import SetanTrend from "../public/imgTrending/setan-trending.png";
import AvatarTrend from "../public/imgTrending/avatar-trending.png";
import antmanTrend from "../public/imgTrending/antman-trending.png";
import avangersTrend from "../public/imgTrending/avangers-trending.png";
import connectTrend from "../public/imgTrending/connect-trending.png";
import menduaTrend from "../public/imgTrending/mendua-trending.png";
import menuTrend from "../public/imgTrending/menu-trending.png";

// Part Hover
import HoverJalangkung from "../public/imgDetailHover/hover-jalangkung.png";
import Hoverantman from "../public/imgDetailHover/hover-antman.png";
import Hoveravangers from "../public/imgDetailHover/hover-avangers.png";
import Hoveravatar from "../public/imgDetailHover/hover-avatar.png";
import Hoverconnect from "../public/imgDetailHover/hover-connect.png";
import Hoversetan from "../public/imgDetailHover/hover-setan.png";
import Hoverthemenu from "../public/imgDetailHover/hover-themenu.png";
import Hovermendua from "../public/imgDetailHover/hover-mendua.png";

const FilmPopuler = () => {
  return (
    <section id="trending" className="mx-auto mt-20">
      <div className="">
        <TitleMovie title="Film Populer" />
        <div className="pl-14">
          <Swiper loop={true} slidesPerView={6} className="-mx-10">
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={JalangkungTrend}
                TrendHover={HoverJalangkung}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={menduaTrend}
                TrendHover={Hovermendua}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={SetanTrend}
                TrendHover={Hoversetan}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={connectTrend}
                TrendHover={Hoverconnect}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={antmanTrend}
                TrendHover={Hoverantman}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={menuTrend}
                TrendHover={Hoverthemenu}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={AvatarTrend}
                TrendHover={Hoveravatar}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <CardsTrending
                imgTrend={avangersTrend}
                TrendHover={Hoveravangers}
                titleTrending="Jalangkung"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FilmPopuler;
