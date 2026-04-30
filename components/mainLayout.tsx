"use client"
import ChildrenInterface from "@/interfaces/children-interface"
import { FC, useEffect, useState } from "react"
import {AntdRegistry} from "@ant-design/nextjs-registry"
import "animate.css"
// import "@ant-design/v5-patch-for-react-19"
import Header from "./header"
import Footer from "./footer"
import LoaderPage from "./loader"
import ScrollToTop from "./scrollToTop"

const MainLayout : FC<ChildrenInterface> = ({children}) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)  // 1.2 sec smooth fade
    return () => clearTimeout(timer)
  }, [])

  return (
    <AntdRegistry>
      {loading && <LoaderPage/>}

      <div className={`flex flex-col min-h-screen transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
        
        <Header/>

        <main className="flex-1 w-full">
          {children}
        </main>

        <Footer/>

        <ScrollToTop/>

      </div>
    </AntdRegistry>
  )
}

export default MainLayout
