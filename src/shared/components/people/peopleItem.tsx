import Image from "next/image"

export const PeopleItem = () => {
  return (
    <div className="flex justify-between items-center py-[4px]">
      <div className="flex-1 flex items-center">
        <div className="relative w-[32px] h-[32px] mr-[12px] rounded-[50%] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dkbqjq6t5/image/upload/v1652026234/avatar/rbpssmh9hozth6n0ejuj.jpg"
            alt=""
            layout="fill"
          />
        </div>

        <div className="text-[13px]">
          <p className="font-medium line-clamp-1">justinbieber</p>
          <p className="font-light text-[12px] text-text-opacity">
            suggested for you
          </p>
        </div>
      </div>
      <button className="text-indigo font-normal text-[13px]">Follow</button>
    </div>
  )
}
