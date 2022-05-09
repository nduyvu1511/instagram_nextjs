import React from "react"

interface BadgeProps {
  count: number
  size: "sm" | "lg" | "md"
  className?: string
}

export const Badge = ({ count, size, className = "" }: BadgeProps) => {
  const newSize = size === "sm" ? 16 : size === "lg" ? 18 : 20
  return (
    <span
      className={`absolute text-[10px] font-bold w-[16px] h-[16px] bg-primary flex items-center 
      justify-center rounded-full text-[#fff] -top-1/2 left-1/2 ${className}`}
    >
      {count}
    </span>
  )
}

export default Badge
