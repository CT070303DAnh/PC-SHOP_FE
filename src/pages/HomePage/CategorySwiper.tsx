import React, { SetStateAction, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import { Swiper as SwiperCore, Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CategoryItem from "./CategoryItem";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

// interface Propbody {
//   context: ContextType[];
//   firstPage: boolean;
//   lastPage: boolean;
//   pageNumber: number;
//   pageSize: number;
//   totalElement: number;
//   totalPages: number;
// }

interface Props {
  data: any;
}

const CategorySwiper = ({ data }: Props) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isEnd, setIsEnd] = useState<SetStateAction<boolean>>();
  const [isBeginning, setIsBeginning] = useState<SetStateAction<boolean>>();
  const [isHovered, setIsHovered] = useState<boolean>(true);

  return (
    <div className="">
      <div
        className="flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className={`absolute left-[8%] z-10 transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          } ${isBeginning ? "text-white" : "text-black"}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="size-10" />
        </button>
        <Swiper
          className="w-full h-full"
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 5,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
            1024: {
              slidesPerView: 10,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
          }}
          grid={{
            rows: 1,
            fill: "row",
          }}
          onBeforeInit={(swiper: SwiperType) => {
            // Định nghĩa kiểu cho swiper
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Grid]}
          onSlideChange={(swiper: SwiperType) => {
            // Định nghĩa kiểu cho swiper
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {data.map((item: any) => (
            <SwiperSlide key={item.id} className="h-52">
              <CategoryItem data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`absolute right-[8%] z-10 transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          } ${isEnd ? "text-white" : "text-black"}`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="size-10" />
        </button>
      </div>
    </div>
  );
};

export default CategorySwiper;
