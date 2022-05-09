interface TagProps {
  name: string
  size?: "lg" | "sm" | "md"
  value: any
  onClick: (value: any) => void
  active?: boolean
  className?: string
}

export const Tag = (props: TagProps) => {
  const { name, onClick, size = "sm", value, active, className } = props

  return (
    <span
      onClick={() => onClick && onClick(value)}
      className={`flex items-center w-fit justify-center cursor-pointer rounded-[25px] px-[16px] whitespace-nowrap h-[28px] border border-border-color-1 dark:border-border-dark-color-1
      text-[12px] font-medium text-style bg-bg-light-gray dark:bg-bg-dark-gray hover:bg-bg-light-gray-hover ${
        active
          ? "dark:bg-text-dark-heading bg-text-light-opacity text-text-dark-heading border-0 dark:text-text-light-heading hover:bg-text-light-opacity"
          : ""
      }
      ${className || ""}
    `}
    >
      {name}
    </span>
  )
}
