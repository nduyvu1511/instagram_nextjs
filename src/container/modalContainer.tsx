/* eslint-disable @next/next/no-img-element */
import { PostModal } from "@/components"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../core"

export const ModalContainer = () => {
  const dispatch = useDispatch()
  const { isOpenPostModal } = useSelector((state: RootState) => state.modal)
  console.log(isOpenPostModal)
  return <>{isOpenPostModal ? <PostModal /> : null}</>
}
