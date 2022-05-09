import { People, PeopleItem, Post, Story } from "@/components"
import { MainLayout } from "@/layout"
import { ModuleItem } from "@/models"
import { GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"

const Home = ({ modules }: { modules: ModuleItem[] }) => {
  const router = useRouter()

  return (
    <section className="container pb-[1000px]">
      <div className="grid grid-cols-3 gap-x-[20px]">
        <div className="lg:col-span-2 col-span-3">
          <div className="">
            <Story />
          </div>
          <div className="mt-[20px]">
            <Post />
          </div>
        </div>

        <div className="col-span-1 hidden lg:block relative">
          <div className="pt-[24px] fixed w-[295px]">
            <div className="flex items-center justify-between mb-[20px]">
              <div className="flex items-center">
                <div className="relative w-[56px] h-[56px] rounded-[50%] overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dkbqjq6t5/image/upload/v1652021458/avatar/ihsehhmkqcrj9dj0nmfy.jpg"
                    alt=""
                    layout="fill"
                  />
                </div>
                <div className="text-[13px] ml-[16px]">
                  <p className="font-semibold text-text">nduyvu1511</p>
                  <p className="text-text-opacity">Vu Nguyen</p>
                </div>
              </div>
              <button className="text-indigo text-[12px]">Switch</button>
            </div>

            <div className="flex items-center justify-between text-[13px] mb-[16px]">
              <p className="font-semibold text-text-opacity">
                Suggestions For You
              </p>
              <button>See All</button>
            </div>
            <ul className="list-none">
              <li className="mb-[5px]">
                <PeopleItem />
              </li>
              <li className="mb-[5px]">
                <PeopleItem />
              </li>
              <li className="mb-[5px]">
                <PeopleItem />
              </li>
              <li className="mb-[5px]">
                <PeopleItem />
              </li>
              <li className="mb-[5px]">
                <PeopleItem />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

Home.Layout = MainLayout

export default Home
