/* eslint-disable react/prop-types */
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useEffect, useRef } from "react";

function ProductImages({ product }) {
  const ref = useRef();
  const images = product?.images;

  useEffect(() => {
    const allBullets = document.querySelectorAll(".productsBullets");
    allBullets.forEach((bullet, idx) => {
      bullet.style.backgroundImage = `url(${images?.at(idx)})`;
    });
  }, [images]);

  function handleClickForward() {
    const activeElement = document.querySelector(".productsActiveBullets");
    const allBullets = document.querySelectorAll(".productsBullets");
    const index = Array.from(allBullets).indexOf(activeElement);
    if (index % 3 == 0) {
      ref.current.scroll(
        window.innerWidth >= 640 ? 572 : 362.4 * (index / 3),
        0,
      );
    }
  }

  function handleClickPrevious() {
    const activeElement = document.querySelector(".productsActiveBullets");
    const allBullets = document.querySelectorAll(".productsBullets");
    const index = Array.from(allBullets).indexOf(activeElement);
    if (index % 3 == 0) {
      ref.current.scroll(
        window.innerWidth >= 640 ? 572 : 362.4 * ((index + 1) / 3 - 1),
        0,
      );
    }
  }

  return (
    <>
      <div className="flex h-[919px] w-full min-w-[548px] max-w-[548px] flex-col gap-6 max-xl:min-w-[unset] max-xl:max-w-[unset] max-sm:h-fit max-sm:w-full">
        <div className="relative flex h-[729px] items-center justify-center bg-white-shade-2 max-sm:h-[414px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: `.next`,
              prevEl: `.prev`,
              clickable: true,
            }}
            pagination={{
              el: `.paginationProducts`,
              clickable: true,
              type: `bullets`,
              bulletClass: "productsBullets",
              bulletActiveClass: "productsActiveBullets",
            }}
            className="flex max-w-[548px] items-center justify-center bg-white-shade-2"
          >
            {images?.map((el) => {
              return (
                <>
                  <SwiperSlide className="bg-white-shade-2">
                    <img src={el} className="mix-blend-darken" />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
          <div className="absolute left-[50%] top-[50%] z-50 flex w-[calc(100%-65px)] translate-x-[-50%] translate-y-[-50%] items-center justify-between max-sm:w-[calc(100%-48px)]">
            <div
              className="prev flex h-10 w-10 cursor-pointer items-center justify-center rounded-[50%] bg-white text-black"
              onClick={handleClickPrevious}
            >
              <GoArrowLeft className="h-6 w-6" />
            </div>
            <div
              className="next flex h-10 w-10 cursor-pointer items-center justify-center rounded-[50%] bg-white text-black"
              onClick={handleClickForward}
            >
              <GoArrowRight className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div
          className="paginationProducts flex w-full items-center gap-6 overflow-x-scroll max-sm:gap-3"
          ref={ref}
        ></div>
      </div>
    </>
  );
}

export default ProductImages;
