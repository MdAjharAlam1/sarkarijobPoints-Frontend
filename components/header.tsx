"use client"

import Link from "next/link";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const navItems = [
    {
        title: "Home",
        icon:"🏠",
        url:"/"
    },
    {
        title:"Jobs",
        icon:"💼",
        url:"/category/latest-job"
    },
    {
        title: "Admit",
        icon:"📝",
        url:"/category/admit-card"
    },
    {
        title:"Results",
        icon:"📄",
        url:"/category/results"
    },
    {
        title:"Syllabus",
        icon:"🎓",
        url:"/category/syllabus"
    }
    
]

const Header = () => {
  return (
    <header className="w-full bg-linear-to-b from-gray-900 to-gray-800 text-white py-4 shadow-lg">

      {/* Mobile View Menu */}
        <nav className=" flex flex-col  items-center gap-5 md:hidden">
            <div>
                <h1 className='text-[26px] font-bold '>🎯 Sarkari Job Points </h1>
            </div>
            <ScrollArea className="w-100 pb-4 rounded-md whitesapce-nowrap">
                <div className="flex items-center gap-5 px-8">
                    {
                        navItems.map((item:any, index:number)=>(
                            <Link key={index} href={`${item.url}`} className="flex items-center gap-1 hover:text-cyan-400 transition">
                                    {item.title}
                            </Link>
                                
                        ))
                    }
                </div>
                <ScrollBar orientation="horizontal"/>
            </ScrollArea>
        </nav>

      {/* Desktop View */}
        <nav className="hidden md:flex justify-between px-10 py-2 text-gray-100 sticky top-0 z-100">
            <div>
                <h1 className='text-[26px] font-bold '>🎯 Sarkari Job Points </h1>
            </div>
            <div className="flex gap-6 text-[16px] font-medium">
                {
                    navItems.map((item:any, index:number)=>(
                        <Link key={index} href={`${item.url}`} className="flex items-center gap-1 hover:text-cyan-400 transition">
                            {item.icon} {item.title}
                        </Link>
                     ))
                }
            </div>
        </nav>

    </header>
  );
}

export default Header
