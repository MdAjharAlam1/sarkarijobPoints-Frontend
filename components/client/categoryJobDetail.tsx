

"use client"

import { Card, CardContent } from "../ui/card"
import { Button, Form } from "antd"
import { Input } from "../ui/input"
import { useState } from "react"
import { sectionData } from "@/data"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Shadcn Pagination
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import slugify from "@/utils/slugify"

const CategoryJobDetail = () => {
  const [search, setSearch] = useState("")
  const [state, setState] = useState("all")
  const [page, setPage] = useState(1)

  const itemsPerPage = 4   // 👈 Change items per page

  const pathname = usePathname()
  const path = pathname.split("/").pop()
  const mainPath = path?.replace(/-/g," ")

  // Get unique states dynamically
  const uniqueStates = Array.from(
    new Set(
        sectionData.results.map((item:any)=> item.state?.trim())
        .filter(Boolean)
    )
  )
  console.log("unique state", uniqueStates)

  // Filter by search + state
  const filteredData = sectionData.results.filter((item:any) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (state === "all" || item.state === state)
  )

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice((page-1)*itemsPerPage, page*itemsPerPage)

  return (
    <div className="py-8 max-w-6xl mx-auto px-4 space-y-7">

      <h2 className="text-4xl font-bold capitalize text-gray-800 tracking-wide">
        {mainPath}
      </h2>

      <Card className="rounded-xl border shadow-md p-6 bg-linear-to-br from-white to-gray-50">
        <Form layout="inline" className="flex flex-wrap gap-4 w-full">

          {/* Search */}
          <Form.Item className="flex-1 min-w-65">
            <Input
              placeholder="🔍 Search job title..."
              className="py-5 text-lg border-gray-300"
              value={search}
              onChange={(e)=>{setSearch(e.target.value); setPage(1)}}
            />
          </Form.Item>

          {/* State Filter */}
          <Form.Item>
            <Select onValueChange={(value:string)=> setState(value)}>
                <SelectTrigger className="w-56 py-5">
                    <SelectValue placeholder="Select State"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All State</SelectItem>
                    {
                        uniqueStates.map((st:string,idx:number)=>(
                            <SelectItem key={idx} value={st}>{st}</SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
          </Form.Item>

          <Button size="large" type="primary" className="px-8">Search</Button>
        </Form>

        <div className="mt-6 grid gap-4">
          {paginatedData.map((item:any, index:number)=>(
            <Card
              key={index}
              className="p-4 border hover:shadow-xl transition-all duration-200 hover:-translate-y-1 rounded-lg cursor-pointer"
            >
                <CardContent className="p-0 space-y-2">
                    <Link href={`/${slugify(item.title)}`}>
                        <h3 className="text-lg font-semibold text-blue-700 hover:underline">{item.title}</h3>
                    </Link>
                    <p className="text-sm text-gray-500">📍 {item.state}</p>
                </CardContent>
            </Card>
          ))}

          {/* No Result Found */}
          {paginatedData.length === 0 && (
            <p className="text-center text-gray-500 py-5 text-lg">No jobs found...</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-6 flex justify-center">
            <PaginationContent>

              {page > 1 && (
                <PaginationItem>
                  <PaginationPrevious onClick={()=>setPage(p=>p-1)} />
                </PaginationItem>
              )}

              {[...Array(totalPages)].map((_,i)=>(
                <PaginationItem key={i}>
                  <PaginationLink 
                    isActive={page===i+1}
                    onClick={()=>setPage(i+1)}
                  >
                    {i+1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {page < totalPages && (
                <PaginationItem>
                  <PaginationNext onClick={()=>setPage(p=>p+1)} />
                </PaginationItem>
              )}

            </PaginationContent>
          </Pagination>
        )}
      </Card>
    </div>
  )
}

export default CategoryJobDetail

