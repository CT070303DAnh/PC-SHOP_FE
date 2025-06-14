import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <div className="w-[90%] mx-auto overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg shadow-lg"
      >
        {/* Slide 1 */}
        <SwiperSlide>
    <div className="flex">
      <img
        className="w-1/2 object-cover"
        src="https://anphat.com.vn/media/banner/09_May0269ca6c742197ab1dbb59b49f161fbc.jpg"
        alt=""
      />
      <img
        className="w-1/2 object-cover"
        src="https://anphat.com.vn/media/banner/27_Mayaa275ad9dcc077f95d8dc6a06b4b4eab.jpg"
        alt=""
      />
    </div>
  </SwiperSlide>


        {/* Slide 2 */}
        <SwiperSlide>
    <div className="flex">
      <img
        className="w-1/2 object-cover"
        src="https://anphat.com.vn/media/banner/10_Apr17ef1e034dc0f37a3322c3e6a953b85e.jpg"
        alt=""
      />
      <img
        className="w-1/2 object-cover"
        src="https://anphat.com.vn/media/banner/01_Oct00f5f2e19705f6e880fdf40cf9624f60.jpg"
        alt=""
      />
    </div>
  </SwiperSlide>

      </Swiper>
      
    </div>
  );
};

export default Carousel;