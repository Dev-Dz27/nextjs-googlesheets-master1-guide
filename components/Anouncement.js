// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectCreative,
  } from "swiper";
  import Link from "next/link";
  
  import { Swiper, SwiperSlide } from "swiper/react";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/effect-creative";
  
  const Announcement = () => {
    return (
      <div className="bg-opacity-5 bg-black backdrop-blur-lg rounded drop-shadow-lg py-1 sticky top-0 z-10">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCreative,
          ]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 1000 }}
          fadeEffect={{
            crossFade: true,
          }}
          navigation={{
            prevEl: ".swiper-prev-button",
            nextEL: ".swiper-next-button",
          }}
          // navigation
         
          speed= {15000}
        >
          <div >
            <div className="mx-auto flex max-w-3xl items-center justify-center">
              <div class="swiper-prev-button">
  
              <button
                className="swiper-prev-button hidden  sm:block sm:rounded  sm:transition"
                aria-label="Previous Slide"
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                    />
                </svg>
              </button>
                    </div>
  
              <div class="swiper">
                <div class="swiper-wrapper">
                  <SwiperSlide>
                    <div class="swiper-slide">
                      <p class="text-center text-sm font-medium">
                      Got feedback?
                        <Link class="underline" href="/form">
                          {" "}
                          Contact us? &rarr;{" "}
                        </Link>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide">
                      <p class="text-center text-sm font-medium">
                      Help us improve  
                        <Link class="underline" href="/form">
                          {" "}
                          this guide! &rarr;{" "}
                        </Link>
                      </p>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
  
              <button
                className="swiper-next-button hidden  sm:block sm:rounded  sm:transition"
                aria-label="Next Slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    );
  };
  
  export default Announcement;