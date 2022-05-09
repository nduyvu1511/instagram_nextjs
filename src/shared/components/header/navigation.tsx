import {
  directIcon,
  exploreFillIcon,
  exploreIcon,
  heartIcon,
  homeIcon,
  plusIcon,
  searchIcon,
} from "@/assets"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

export const Navigation = () => {
  const router = useRouter()

  return (
    <ul className="flex items-center w-full">
      <li className="cursor-pointer mr-[20px] flex-1">{homeIcon()}</li>
      <li className="cursor-pointer hidden md:block mr-[20px] flex-1">
        {directIcon()}
      </li>
      <li className="cursor-pointer md:hidden mr-[20px] flex-1">
        {searchIcon(24, "#262626")}
      </li>
      <li className="cursor-pointer mr-[20px] flex-1">{plusIcon()}</li>
      <li className="cursor-pointer hidden md:block mr-[20px] flex-1">
        <Link href="/explore">
          {router.pathname === "/explore" ? exploreFillIcon() : exploreIcon()}
        </Link>
      </li>
      <li className="cursor-pointer mr-[20px] flex-1">{heartIcon()}</li>
      <li className="">
        <div className="">
          <div
            className={`${
              false
                ? "h-[28px] w-[28px] rounded-[50%] border flex justify-center items-center"
                : ""
            }`}
          >
            <div className="cursor-pointer relative h-[24px] w-[24px] rounded-[50%] overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dkbqjq6t5/image/upload/v1652021458/avatar/ihsehhmkqcrj9dj0nmfy.jpg"
                layout="fill"
                alt=""
              />
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}
