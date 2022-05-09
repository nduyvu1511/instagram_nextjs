import Image from "next/image"
import React from "react"

export const StoryItem = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[56px] h-[56px] rounded-[50%] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dkbqjq6t5/image/upload/v1652026234/avatar/rbpssmh9hozth6n0ejuj.jpg"
          layout="fill"
          alt=""
          objectFit="cover"
        />
      </div>

      <p className="text-[12px] text-text font-normal mt-[6px] line-clamp-1 text-center">
        {"justinbieber"}
      </p>
    </div>
  )
}
