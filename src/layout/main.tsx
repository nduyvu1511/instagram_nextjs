import { Header } from "@/components"
import { Navigation } from "@/components/header/navigation"
import { ModalContainer } from "@/container"
import { LayoutProps } from "@/models"

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="pt-header-mobile-height sm:pt-header-height pb-nav-bottom-height md:pb-0 min-h-screen bg-bg-color">
        {children}
      </main>
      <div className="flex items-center justify-center px-[20px] md:hidden fixed h-nav-bottom-height left-[0px] right-[0px] bottom-[0px] border-t border-border-1 bg-white z-[999]">
        <Navigation />
      </div>

      <ModalContainer />
    </>
  )
}
