import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./slider/slider.css";
import slide01 from "./slider/1.png";
import slide02 from "./slider/2.png";
import slide03 from "./slider/3.png";
import slide04 from "./slider/4.png";
import { Pagination } from "swiper";


function Slider() {
  return (
    <div className="flex slider relative mb-8">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="slider"
        style={{
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-color": "#ffffff00",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-pagination-bottom": "15px",
        }}
      >
        <SwiperSlide><img src={slide01} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide02} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide03} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide04} alt="" /></SwiperSlide>
        <div className="bottom-0 left-0 w-full h-[58px] backdrop-blur-[4.5px] bg-[#00000066] absolute z-[9]"></div>
      </Swiper>
    </div>
  );
}

export default Slider;