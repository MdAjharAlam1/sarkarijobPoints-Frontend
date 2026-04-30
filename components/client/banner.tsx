"use client"
import { Badge } from "../ui/badge"
const Banner = () => {
  return (
    <div className="bg-linear-to-r from-sky-300 via-blue-300 to-indigo-300 text-gray-900 text-center py-4 shadow-xl space-y-2 md:py-8">
        <Badge className="bg-gray-200 text-gray-800 text-sm px-3 py-0.5">🔴 Live</Badge>
        <h2 className="text-xl font-bold md:text-3xl">Your Trusted Government Job Portal</h2>
        <p className="opacity-90 mt-1">Latest Government Job Notification & Results</p>
    </div>
  )
}

export default Banner
