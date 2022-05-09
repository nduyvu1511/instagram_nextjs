import React from "react"
import { Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { stories } from "./data"
import { StoryItem } from "./storyItem"

export const Story = () => {
  return (
    <div className="bg-white border-t-0 sm:border-t border border-border-1 py-[10px] rounded-[2px] post-container">
      <div className="">
        <Swiper
          className="px-[15px]"
          spaceBetween={10}
          slidesPerView={3}
          slidesPerGroup={3}
          breakpoints={{
            320: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            420: {
              slidesPerView: 5,
            },
            600: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 7,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          modules={[Navigation]}
        >
          {stories.map((item) => (
            <SwiperSlide key={item.name}>
              <StoryItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
