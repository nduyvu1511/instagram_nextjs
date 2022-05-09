import { emojiIcon } from "@/assets"
import { IEmojiPickerProps } from "emoji-picker-react"
import dynamic from "next/dynamic"
import React, { useRef, useState } from "react"
import { useClickOutside, useInputText } from "shared/hook"

// let Picker: any
// if (typeof window !== "undefined") {
//   import("emoji-picker-react").then((_module) => {
//     Picker = _module.default
//   })
// }
export const CommentForm = () => {
  const Picker = dynamic<IEmojiPickerProps>(
    () => import("emoji-picker-react"),
    {
      ssr: false,
      loading: () => <p>Loading ...</p>,
    }
  )
  const [showEmoji, setShowEmoji] = useState<boolean>(false)
  const emojiRef = useRef<HTMLDivElement>(null)
  const { onChange, value, setValue } = useInputText("")

  useClickOutside([emojiRef], () => {
    setShowEmoji(false)
  })

  const onEmojiClick = (event: any, emojiObject: any) => {
    setValue(`${value}${emojiObject.emoji}`)
  }

  return (
    <div className="flex items-center py-[10px]">
      <div ref={emojiRef} className="mr-[10px] relative flex">
        <button onClick={() => setShowEmoji(!showEmoji)}>{emojiIcon()}</button>
        {showEmoji ? (
          <div className="absolute -top-[330px] left-[-15px] z-[100]">
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        ) : null}
      </div>

      <form className="flex-1 flex" action="#">
        <input
          onChange={onChange}
          value={value}
          className="h-[30px] outline-none border-none pl-[4px] pr-[10px] flex-1 font-normal text-sm text-text"
          type="text"
          placeholder="Add a comment..."
        />
        <button
          type="submit"
          className={`text-sm font-medium text-indigo ${
            value ? "opacity-100" : "opacity-30"
          }`}
        >
          Post
        </button>
      </form>
    </div>
  )
}
