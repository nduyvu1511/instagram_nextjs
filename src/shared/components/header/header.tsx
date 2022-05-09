/* eslint-disable @next/next/no-img-element */
import { directIcon, exploreIcon, logo } from "@/assets"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { useDispatch } from "react-redux"
import InputSearch from "../inputs/inputSearch"
import { Navigation } from "./navigation"

export const Header = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <header
      className={`fixed bg-white left-[0px] right-[0px] top-[0px] z-[999] h-header-mobile-height px-[20px] md:h-header-height border-b border-border-2`}
    >
      <div className="container pt-[0px] h-full flex justify-between items-center">
        <div className="md:hidden flex items-center">
          {/* <button>{exploreIcon()}</button> */}
        </div>

        <div className="flex items-center">
          <div className="relative cursor-pointer w-[100px] h-[30px]">
            <Link href="/" passHref>
              <Image layout="fill" src={logo} alt="" />
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <InputSearch />
        </div>

        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="md:hidden flex items-center">
          <button>{directIcon()}</button>
        </div>
      </div>
    </header>
  )
}
