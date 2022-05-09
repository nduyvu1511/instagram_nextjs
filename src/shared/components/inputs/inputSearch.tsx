import { closeIcon, searchIcon } from "@/assets"
import React, { useEffect, useRef, useState } from "react"
import { useClickOutside, useInputText } from "shared/hook"

const InputSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { onChange, value, clearValue } = useInputText("")
  const formRef = useRef<HTMLFormElement>(null)
  const [showIcon, setShowIcon] = useState<boolean>(true)

  useClickOutside([formRef], () => {
    setShowIcon(true)
  })

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <form
      ref={formRef}
      className="w-[270px] h-[36px] bg-[#EFEFEF] rounded-[8px] relative"
      action="#"
    >
      <input
        onFocus={() => setShowIcon(false)}
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        className={`w-full h-full outline-none bg-[#EFEFEF] rounded-[7px] ${
          !showIcon ? "pl-[15px]" : "pl-[45px]"
        } pr-[30px] font-light text-[14px] text-text-opacity`}
        placeholder="Search"
      />

      {showIcon ? (
        <span className="absolute left-[15px] transform -translate-y-1/2 top-1/2">
          {searchIcon()}
        </span>
      ) : null}

      {value ? (
        <span
          onClick={() => clearValue()}
          className="absolute cursor-pointer top-1/2 transform -translate-y-1/2 right-[10px] 
        text-[#fff] flex items-center justify-center bg-[#C7C7C7] w-[13px] h-[13px] rounded-[50%]"
        >
          {closeIcon(7, "#EEEEEE")}
        </span>
      ) : null}
    </form>
  )
}

export default InputSearch
