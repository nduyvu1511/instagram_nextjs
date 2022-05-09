import { setOpenSearchModal } from "@/modules/modal/modalSlice"
import React from "react"
import { useDispatch } from "react-redux"
import InputSearch from "../inputs/inputSearch"

export const SearchModal = () => {
  const dispatch = useDispatch()

  return (
    <div className="fixed inset-[0] bg-bg-light-white dark:bg-bg-dark z-[1001]">
      <div className="container py-[16px]">
        <div className="flex justify-end">
          <button
            className=""
            onClick={() => dispatch(setOpenSearchModal(false))}
          >
            {/* <RiCloseLine className="text-3xl text-text-light-opacity" /> */}
          </button>
        </div>
        <section className="">
          <div className="my-[12px]">
            <InputSearch />
          </div>
        </section>
      </div>
    </div>
  )
}
