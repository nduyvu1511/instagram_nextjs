import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactChild, ReactElement, ReactNode } from "react"

export interface HasChildren {
  children: ReactChild
}

export interface LayoutProps {
  children: ReactNode
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export interface PayloadBoolean {
  payload: boolean
}

export interface IReviewItem {
  id: number
  author_name: string
  author_avatar: string
  rating_count: number
  content: string
  date: string
}

export interface IPurchaseItem {
  module_id: number
  image_url: string
  date: string
  module_name: string
  author_name: string
}
