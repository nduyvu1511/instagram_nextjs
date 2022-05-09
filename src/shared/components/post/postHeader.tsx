import { threeDotsIcon } from "@/assets"
import Image from "next/image"
import { useState } from "react"
import Modal from "../common/modal"

export interface PostHeaderProps {
  avatar: string
  userName: string
}

export const PostHeader = ({ avatar, userName }: PostHeaderProps) => {
  const [openOption, setOpenOption] = useState<boolean>(false)

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative w-[32px] h-[32px] rounded-[50%] overflow-hidden">
            <Image src={avatar} alt="" layout="fill" />
          </div>

          <p className="text-sm font-medium ml-[10px]">{userName}</p>
        </div>

        <div className="">
          <button onClick={() => setOpenOption(true)}>{threeDotsIcon()}</button>
        </div>
      </div>

      {openOption ? (
        <Modal onClick={() => setOpenOption(false)}>
          <div className="min-w-[400px] w-full">
            <ul className="list-none text-sm text-text font-normal">
              <li className="text-center py-[14px] text-danger font-semibold border-b border-border-1 cursor-pointer px-[10px]">
                Report
              </li>
              <li className="text-center py-[14px] text-danger font-semibold border-b border-border-1 cursor-pointer px-[10px]">
                Unfollow
              </li>
              <li className="text-center py-[14px] text-text border-b border-border-1 cursor-pointer px-[10px]">
                Go to post
              </li>
              <li className="text-center py-[14px] text-text cursor-pointer px-[10px] border-b border-border-1">
                Tagged accounts
              </li>
              <li className="text-center py-[14px] text-text cursor-pointer px-[10px] border-b border-border-1">
                Share to...
              </li>
              <li className="text-center py-[14px] text-text cursor-pointer px-[10px] border-b border-border-1">
                Copy link
              </li>
              <li
                onClick={() => setOpenOption(false)}
                className="text-center py-[14px] text-text cursor-pointer px-[10px]"
              >
                Cancel
              </li>
            </ul>
          </div>
        </Modal>
      ) : null}
    </>
  )
}
