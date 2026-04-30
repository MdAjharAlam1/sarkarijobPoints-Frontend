"use client"

import { ArrowUpCircle } from "lucide-react"
import { useEffect, useState } from "react"

const ScrollToTop = () => {
    const[visible, setVisible] = useState(false)

    useEffect(()=>{
        const toggleVisible = ()=>{
            if(window.scrollY > 300) 
                setVisible(true)
            else
                setVisible(false)
        }
        window.addEventListener("scroll", toggleVisible)
        return () => window.removeEventListener('scroll',toggleVisible)
    },[])

    const scrollTop = () =>{
        window.scrollTo({top:0, behavior:"smooth"})
    }

  return (
    <>
        {
            visible && (
                <button 
                    onClick={scrollTop}
                    className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition z-50 flex items-ceter justify-center  "
                >
                    <ArrowUpCircle/>
                </button>
            )
        }
    </>
  )
}

export default ScrollToTop