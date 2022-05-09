import { heartFillIcon, heartIcon } from "@/assets"
import { HEART_COLOR } from "@/helper"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface CommentItemProps {}

export const CommentItem = () => {
  return (
    <div className="flex items-start">
      <div className="relative w-[32px] h-[32px] rounded-[50%] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dkbqjq6t5/image/upload/v1652026234/avatar/rbpssmh9hozth6n0ejuj.jpg"
          alt=""
          layout="fill"
        />
      </div>

      <div className="flex-1 mx-[16px]">
        <div className="flex mb-[10px] text-sm">
          <p className="font-light">
            <Link href={`/`}>
              <a className="font-medium">justinbieber</a>
            </Link>
            <span className="ml-[4px]">
              You are beautiful in your own kind of way You are beautiful in
              your own kind of way You are beautiful in your own kind of way You
              are beautiful in your own kind of way
            </span>
          </p>
        </div>

        <div className="flex items-center text-[12px] text-text-opacity mb-[10px]">
          <span className="mr-[10px] font-normal">2h</span>
          <button className="mr-[10px] font-medium">27 likes</button>
          <button className="font-medium">Reply</button>
        </div>

        <button className="text-[12px] text-text-opacity font-normal flex items-center">
          <div className="h-[1px] w-[20px] bg-black-50 mr-[12px]"></div>
          View replies(4)
        </button>
      </div>

      {/* <button>{heartIcon(12)}</button> */}
      <button>{heartFillIcon(12, HEART_COLOR)}</button>
    </div>
  )
}
