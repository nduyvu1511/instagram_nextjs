import { closeIcon } from "@/assets"
import { ReactNode, useEffect } from "react"

interface ModalProps {
  children: ReactNode
  onClick?: Function
  showCloseBtn?: boolean
  className?: string
  stack?: boolean
}

const Modal = ({
  children,
  onClick,
  showCloseBtn = false,
  className,
  stack,
}: ModalProps) => {
  useEffect(() => {
    const body = document.documentElement
    !stack && body.classList.add("overflow-hidden")

    return () => {
      !stack && body.classList.remove("overflow-hidden")
    }
  }, [])

  return (
    <div
      className={`fixed ${
        stack ? "z-[1001]" : "z-[1000]"
      } inset-[0px] animate-modal`}
    >
      <div
        className={`absolute z-20 bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[7px] ${
          className || ""
        }`}
      >
        {children}
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation()
          onClick && onClick()
        }}
        className={`absolute inset-[0px] bg-black-70`}
      ></div>

      {showCloseBtn ? (
        <button
          className="absolute right-[20px] top-[20px]"
          onClick={(e) => {
            e.stopPropagation()
            onClick && onClick()
          }}
        >
          {closeIcon(24, "#fff")}
        </button>
      ) : null}
    </div>
  )
}

export default Modal
