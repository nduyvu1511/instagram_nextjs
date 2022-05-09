import { commentIcon, directIcon, heartIcon, saveIcon } from "@/assets"
import { setOpenPostModal } from "@/modules/modal/modalSlice"
import React from "react"
import { useDispatch } from "react-redux"
import { Comment } from "../comment"
import Modal from "../common/modal"
import { CommentForm } from "../form"
import { PostHeader } from "./postHeader"
import { PostImage } from "./postImage"

export const PostModal = () => {
  const dispatch = useDispatch()

  return (
    <Modal
      className="rounded-[4px]"
      showCloseBtn
      onClick={() => dispatch(setOpenPostModal(false))}
    >
      <div className="h-[90vh] grid grid-cols-2 max-w-[1400px] w-[80vw]">
        <div className="h-full">
          <PostImage
            images={[
              "https://res.cloudinary.com/dkbqjq6t5/image/upload/v1652029064/image/lmdeyojqimsxwrrtqsep.jpg",
            ]}
          />
        </div>

        <div className="flex flex-col h-full">
          <div className="rounded-[4px] bg-white border-b border-border-1 p-[14px]">
            <PostHeader
              avatar="https://res.cloudinary.com/dkbqjq6t5/image/upload/v1652026234/avatar/rbpssmh9hozth6n0ejuj.jpg"
              userName="justinbieber"
            />
          </div>

          <div className="pt-[16px] flex-1 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto px-[14px] ">
              <Comment />
            </div>

            <div className="mb-[10px] px-[14px] border-t border-border-3">
              <div className="flex items-center justify-between pt-[16px] mb-[20px]">
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

              <p className="mb-[10px] font-medium">71,232 likes</p>
              <p className="font-light text-[12px] text-text-opacity">
                3 HOURS AGO
              </p>
            </div>

            <div className="border-t border-border-3 px-[14px]">
              <CommentForm />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
