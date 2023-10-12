"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SolutionCard from "@/components/SolutionCard";
import { HashNavigation, Navigation, Pagination } from "swiper/modules";
import TrendCard from "../TrendCard";

const SlideShow = ({ data, type }) => {
  switch (type) {
    case "SolutionCard":
      return (
        <Swiper
          slidesPerView={4}
          spaceBetween={28}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, HashNavigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
          }}
          className="solutionSwipper"
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id} data-hash={item.id}>
              <SolutionCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    case "TrendCard":
      return (
        <Swiper
          slidesPerView={4}
          spaceBetween={28}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, HashNavigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1300: {
              slidesPerView: 2,
              spaceBetween: 28,
            },
          }}
          className="trendSwipper"
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id} data-hash={item.id}>
              <TrendCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    case "Banner":
      return (
        <Swiper
          slidesPerView={4}
          spaceBetween={28}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation, HashNavigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1300: {
              slidesPerView: 2.5,
              spaceBetween: 28,
            },
          }}
          className="bannerSwipper"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item) => (
            <SwiperSlide key={item.id} data-hash={item.id}>
              <img
                style={{
                  width: 454,
                  height: 240,
                  position: "relative",
                  boxShadow: "0px 4px 8px rgba(41.44, 41.44, 41.44, 0.12)",
                  borderRadius: 12,
                }}
                src="https://via.placeholder.com/454x240"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    default:
      break;
  }
};

export default SlideShow;
