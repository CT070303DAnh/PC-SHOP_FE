import { SetStateAction, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper"; // Nhập SwiperCore để sử dụng kiểu Swiper
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  "https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/500368107_1833790020732430_8835429006755069748_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vnrWTImtTtIQ7kNvwGE4ief&_nc_oc=AdnSNdkO4sskfbWI_XkWjbpHD-Js6uoFXSOQHKP3DsU5Om81uvPBo15pGzropLfL1tI&_nc_zt=23&_nc_ht=scontent.fhan18-1.fna&_nc_gid=f6H_VJET85dSwA7A2v8khQ&oh=00_AfPT5d-ILT3vxzt_ompCiNR_eN7TNiWDWL_iYY3xeZg1cA&oe=684D01C3"
]
const SwiperThumbs = ({ img }: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); // Quản lý slide đang hoạt động
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isEnd, setIsEnd] = useState<SetStateAction<boolean>>();
  const [isBeginning, setIsBeginning] = useState<SetStateAction<boolean>>();

  return (
    <div className="w-full">
      <div>
        <Swiper
          spaceBetween={10}
          className=""
          onBeforeInit={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          modules={[FreeMode, Thumbs]}
          onSlideChange={(swiper: any) => {
            setActiveIndex(swiper.activeIndex);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          <SwiperSlide>
            <img src={`http://localhost:8080/${img}`} alt="Nature 1" />
          </SwiperSlide>
          {data.map((item: string, index: number) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} alt="Nature 1" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mt-3 flex items-center relative">
        <button
          className={`absolute z-10 transition-opacity bg-slate-50  ${
            isBeginning ? "hidden" : "text-slate-950"
          }`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="size-6" />
        </button>
        <Swiper
          className=""
          onSwiper={setThumbsSwiper} // Đặt Swiper instance sau khi khởi tạo
          spaceBetween={10}
          slidesPerView={5}
          onBeforeInit={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper: any) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {data.map((item: string, index: number) => {
            return (
              <SwiperSlide
                key={index}
                className={
                  activeIndex === index ? "border-2 border-sky-500" : ""
                }
              >
                <img src={item} alt="Nature 1 thumbnail" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className={`absolute right-[0%]  z-10 transition-opacity bg-slate-50  ${
            isEnd ? "hidden" : "text-slate-950"
          }`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default SwiperThumbs;
