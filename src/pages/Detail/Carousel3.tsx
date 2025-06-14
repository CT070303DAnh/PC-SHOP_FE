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
  <div className="overflow-hidden rounded-lg">
    <img
      src="https://hoabanfood.com/wp-content/uploads/cua-hang-HOA-BAN-FOOD-2020-1.jpg"
      alt="Slide 1"
      className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
    />
  </div>
</SwiperSlide>


        {/* Slide 2 */}
        <SwiperSlide>
  <div className="overflow-hidden rounded-lg">
    <img
      src="https://hoabanfood.com/wp-content/uploads/HBF-67A-Official-Address-4.jpg"
      alt="Slide 1"
      className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
    />
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="overflow-hidden rounded-lg">
    <img
      src="https://hoabanfood.com/wp-content/uploads/HBF-Gold-Button-4-c.jpg"
      alt="Slide 1"
      className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
    />
  </div>
</SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Carousel;