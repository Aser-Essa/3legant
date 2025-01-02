import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import SectionContainer from "./SectionContainer";
import { motion } from "motion/react";

function HomeHeroSection() {
  return (
    <SectionContainer className="relative">
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          duration={200}
          navigation={{
            nextEl: `.next`,
            prevEl: `.prev`,
            clickable: true,
          }}
          pagination={{
            el: `.pagination`,
            clickable: true,
            type: `bullets`,
          }}
          className="h-[536px] max-sm:h-[315px]"
        >
          <SwiperSlide>
            <img className="h-full w-full" src="/Living-Room.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full w-full" src="/Living-Room2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full w-full" src="/Living-Room3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full w-full" src="/Living-Room4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full w-full" src="/Living-Room5.jpg" />
          </SwiperSlide>
        </Swiper>
        <div className="absolute left-[50%] top-[50%] z-50 flex w-[calc(100%-65px)] translate-x-[-50%] translate-y-[-50%] items-center justify-between max-sm:hidden">
          <motion.div
            className="prev flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-[50%] bg-white text-black"
            initial={{ opacity: 0, translateX: 30 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <GoArrowLeft className="h-8 w-8" />
          </motion.div>
          <motion.div
            className="next flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-[50%] bg-white text-black"
            initial={{ opacity: 0, translateX: -30 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <GoArrowRight className="h-8 w-8" />
          </motion.div>
        </div>
        <div className="pagination absolute bottom-8 left-[50%] z-50 flex translate-x-[-50%] items-center justify-center gap-4 max-sm:bottom-4"></div>
      </motion.div>
    </SectionContainer>
  );
}

export default HomeHeroSection;
