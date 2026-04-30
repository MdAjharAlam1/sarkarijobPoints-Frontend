
"use client"
import { useEffect, useState } from 'react'
import Banner from './client/banner'
import JobHighLightBar from './client/jobHighlightBar'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { sectionData } from '@/data'
import Link from 'next/link'
import { Button } from './ui/button'
import WebsiteDescription from './websiteDescription'
import { ca } from 'date-fns/locale'

const sectionGrid = [
    {
      title:"Latest Job",
      data: sectionData.latestJobs,
      key:"latest-job"
    },
    {
      title:"Results",
      data: sectionData.results,
      key: "results"
    },
    {
      title:"Admit Card",
      data: sectionData.admitCards,
      key:"admit-card"
    },
    {
      title:"Syallbus",
      data: sectionData.syllabus,
      key:"syallbus"
    },
    {
      title:"Admission Form",
      data: sectionData.admitCards,
      key:"admission-form"
    },
    {
      title:"Answer Key",
      data: sectionData.results,
      key : "answer-key"
    },
   
]
const sectionGradients = [
  "from-red-600 to-red-800",
  "from-blue-600 to-blue-800",
  "from-green-600 to-green-800",
  "from-yellow-600 to-amber-700",
  "from-purple-600 to-purple-800",
  "from-pink-600 to-pink-800",
  "from-orange-600 to-orange-800",
  "from-violet-600 to-indigo-800",
  "from-cyan-600 to-teal-700",
  "from-slate-700 to-gray-900",
];

const jobCategorySection = [
  {
    title:"CIVIL",
  },
  {
    title:"SSC"
  },
  {
    title:"Railway"
  },
  {
    title:"Banking"
  },
  {
    title:"Police"
  },
  {
    title:"Teaching"
  },
  {
    title:"Govt Job"
  },
  {
    title: "All Jobs"
  },
]

const HomePage = () => {
  const [mounted, setMounted] = useState(false)

  let categoryLink = ""
  useEffect(() => setMounted(true), [])

  if(!mounted) return null   // prevents hydration mismatch
  return (
    <div>
      <Banner/>
      <JobHighLightBar/>
      <div className='py-3 max-w-7xl mx-auto mt-4 space-y-10 px-4'>
        <Card className='grid grid-cols-3 gap-4 md:grid-cols-6 px-6 border-none'>
          {
            jobCategorySection.map((category:any, index:number)=>{
              const bgGradient = sectionGradients[index]
              categoryLink = category.title.toLowerCase()
              return(
                <Link 
                  key={index} 
                  href={`/${category.title.toLowerCase()}`} 
                  className={`bg-linear-to-r ${bgGradient} hover:scale-110 hover:underline transition-all duration-300 text-white font-medium text-center rounded-sm py-2 `}>
                    {category.title}
                </Link>
              )
            })
          }
        </Card>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3">

          {
            sectionGrid.map((section:any, index:number)=>{
              const gradient = sectionGradients[index]
              return (
                  <Card key={index} className='rounded-lg shadow-lg border border-rose-100 p-0 pb-25 relative'>
                    <CardHeader className={`bg-linear-to-r ${gradient} py-2 rounded-t-lg`}>
                        <CardTitle className='text-center text-white font-bold text-xl'>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent className='p-0 relative'>
                        <ul className='text-blue-700 space-y-3 px-6'>
                          {
                            section.data.map((item:any, index:number)=>(
                              <li key={index} className=" relative cursor-pointer pl-5 border-b py-1.5">
                                <span className={`w-2 h-2 absolute top-2 left-0 bg-linear-to-r ${gradient}  rounded-full`}></span>
                                <Link href={categoryLink} className=" hover:underline  transition font-medium">{item.title}</Link>
                              </li>
                            ))
                          }
                        </ul>
                        <Link href={`/category/${section.key}`}>
                          <Button variant="outline" size="sm" className={`w-25 text-xs absolute -bottom-20 hover:text-white hover:underline right-7 text-white bg-linear-to-r ${gradient} `}>{`View All >>`}</Button>
                        </Link>
                    </CardContent>
                  </Card>
              )
            })
          }
        </div>
        <WebsiteDescription/>
      </div>
    </div>
  )
}

export default HomePage
