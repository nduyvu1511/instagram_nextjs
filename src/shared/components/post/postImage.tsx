import Image from "next/image"
import { Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"

interface PostImageProps {
  images: string[]
}

export const PostImage = ({ images }: PostImageProps) => {
  return (
    <Swiper
      className="h-full"
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      modules={[Navigation]}
    >
      {images.map((url) => (
        <SwiperSlide key={url}>
          <div className="relative w-full aspect-1 h-full">
            <Image
              className="max-h-[700px] max-w-[700px]"
              src={url}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
