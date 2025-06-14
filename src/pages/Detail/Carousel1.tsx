// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGift } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SetStateAction, useRef, useState } from "react";

import SwiperCore from "swiper"; // Nhập SwiperCore để sử dụng kiểu Swiper

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); // Quản lý slide đang hoạt động
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isEnd, setIsEnd] = useState<SetStateAction<boolean>>();
  const [isBeginning, setIsBeginning] = useState<SetStateAction<boolean>>();

  return (
    <div className="flex items-center">
    
      <Swiper
  className="w-full"
  spaceBetween={50}
  slidesPerView={1}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  modules={[Autoplay]}
  onSlideChange={() => console.log("slide change")}
>
  <SwiperSlide>
    <div className="flex">
      <img
        className="w-1/2 object-cover"
        src="https://anphat.com.vn/media/banner/09_May8f8ab5b2f4be6420b641c307c50026fd.jpg"
        alt=""
      />
      <img
        className="w-1/2 object-cover"
        src="https://anphat.com.vn/media/banner/24_Feb3dabd2b705eed6fd729b5f5f54662388.jpg"
        alt=""
      />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="flex">
      <img
        className="w-1/2 object-cover"
        src="https://anphat.com.vn/media/banner/15_May430d7cd7d3fc0e279abe13041e042365.jpg"
        alt=""
      />
      <img
        className="w-1/2 object-cover"
        src="https://anphat.com.vn/media/banner/18_Apr7ebb9bf3be408e030c04569e311d6cca.jpg"
        alt=""
      />
    </div>
  </SwiperSlide>
  
  
  
</Swiper>

     
      
    </div>
    
  );
};

export default Carousel;
