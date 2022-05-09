import { commentIcon, directIcon, heartIcon, saveIcon } from "@/assets"
import { setOpenPostModal } from "@/modules/modal/modalSlice"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { CommentForm } from "../form"
import { PostHeader } from "./postHeader"
import { PostImage } from "./postImage"

export const PostItem = () => {
  const dispatch = useDispatch()

  return (
    <div className="post-container">
      <div className="rounded-[2px] bg-white border border-border-2 border-b-0 p-[14px]">
        <PostHeader
          avatar="https://res.cloudinary.com/dkbqjq6t5/image/upload/v1652026234/avatar/rbpssmh9hozth6n0ejuj.jpg"
          userName="justinbieber"
        />
      </div>

      <div className="">
        <PostImage
          images={[
            "https://res.cloudinary.com/dkbqjq6t5/image/upload/v1652029064/image/lmdeyojqimsxwrrtqsep.jpg",
          ]}
        />
      </div>

      <div className="p-[16px] pb-[0px] bg-white border border-t-0 text-sm border-border-2 rounded-[2px]">
        <div className="flex items-center justify-between mb-[10px]">
          <div className="flex items-center">
            <button className="mr-[14px]">{heartIcon()}</button>
            <button
              onClick={() => dispatch(setOpenPostModal(true))}
              className="mr-[14px]"
            >
              {commentIcon()}
            </button>
            <button>{directIcon()}</button>
          </div>

          <button>{saveIcon()}</button>
        </div>

        <div className="mb-[10px]">
          <p className="text-sm font-medium">9,883 likes</p>
        </div>

        <div className="mb-[10px]">
          <p className="text-sm font-medium">
            <Link href="/">
              <a className="mr-[4px]">dccomics</a>
            </Link>
            <span className="font-normal">
              Today we celebrate the heart behind every hero.{" "}
            </span>
          </p>
        </div>

        <div className="mb-[10px]">
          <button className="text-text-opacity">
            View all 108 comments...
          </button>
        </div>

        <div className="mb-[10px]">
          <p className="text-text-opacity text-[11px] font-light">1 HOUR AGO</p>
        </div>

        <div className="border-t border-border-1 -mx-[16px] px-[16px]">
          <CommentForm />
        </div>
      </div>
    </div>
  )
}
