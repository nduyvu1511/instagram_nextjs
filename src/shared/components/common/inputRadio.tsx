import React, { useState } from "react"

interface InputRadioProps {
  isChecked?: boolean
  onCheck?: (active: boolean) => void
}

const InputRadio = ({ isChecked, onCheck }: InputRadioProps) => {
  const [active, setActive] = useState<boolean>(isChecked || false)

  return (
    <span
      onClick={() => {
        setActive(!active)
        onCheck && onCheck(!active)
      }}
      className={`flex items-center justify-center w-[18px] h-[18px] rounded-[50%] border border-black-20 cursor-pointer relative`}
    >
      {active ? (
        <span className="bg-primary w-[65%] h-[65%] rounded-[50%] absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2"></span>
      ) : null}
    </span>
  )
}

export default InputRadio
