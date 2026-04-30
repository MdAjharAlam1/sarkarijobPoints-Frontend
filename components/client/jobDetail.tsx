"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
const jobData = {
  "title": "RRB Group D Recruitment 2026",
  "post_date": "December 26, 2025 11:24 am",
  "author": "Sarkari Point Team",
  "education": "10th Pass Job",
  "short_info": "As per the latest updates from news sources, Railway Recruitment Boards (RRBs) will publish the notification form for the recruitment of various Group D posts in Level 1. Recruitment issued for approx 22000 posts.",
  "important_links": {
    "apply_online": "https://example.com/apply",
    "download_short_notice": "https://example.com/notice",
    "download_notification": "https://example.com/notification",
    "download_syllabus": "https://example.com/syllabus",
    "mobile_app": "https://example.com/app",
    "join_whatsapp": "https://example.com/whatsapp",
    "join_telegram": "https://example.com/telegram"
  },
  "important_dates": {
    "notification_date": "21 January 2026",
    "application_start": "21 January 2026",
    "last_date": "20 February 2026",
    "fee_payment_last_date": "20 February 2026",
    "correction_date": "Notify Soon",
    "exam_date": "Notify Soon",
    "admit_card": "Before Exam"
  },
  "application_fee": {
    "general_obc_ews": "Rs. 500/-",
    "sc_st_ph": "Rs. 250/-",
    "female_category": "Rs. 250/-",
    "fee_refund": "After appearing in Stage 1 Exam"
  },
  "age_limit": {
    "as_on": "01 January 2026",
    "minimum": "18 Years",
    "maximum": "33 Years",
    "age_relaxation": "As per RRB rules"
  },
  "vacancy_details": {
    "total_posts": 22000,
    "categories": {
      "general": "—",
      "ews": "—",
      "obc": "—",
      "sc": "—",
      "st": "—"
    }
  },
  "post_wise_vacancy": [
    "Pointsman-B",
    "Assistant (Track Machine)",
    "Assistant (Bridge)",
    "Track Maintainer Gr. IV",
    "Assistant P-Way",
    "Assistant (C&W)",
    "Assistant TRD",
    "Assistant (S&T)",
    "Assistant Loco Shed (Diesel)",
    "Assistant Loco Shed (Electrical)",
    "Assistant Operations (Electrical)",
    "Assistant TL & AC",
    "Assistant TL & AC (Workshop)",
    "Assistant (Workshop) (Mech)"
  ],
  "physical_eligibility": {
    "male": [
      "Lift and carry 35 kg for 100 meters in 2 min without putting down",
      "Run 1000 meters in 4 minutes 15 seconds in one attempt"
    ],
    "female": [
      "Lift and carry 20 kg for 100 meters in 2 min without putting down",
      "Run 1000 meters in 5 minutes 40 seconds in one attempt"
    ]
  },
  "how_to_apply": [
    "Apply through RRB official site before last date",
    "Read full notification before applying",
    "Fill form carefully to avoid rejection"
  ],
  "selection_process": [
    "Computer-Based Test (CBT)",
    "Physical Efficiency Test (PET)",
    "Document Verification (DV)",
    "Medical Examination"
  ]
}


export default function JobDetail() {
  const data = jobData

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-blue-700">{data.title}</h1>
        <p className="text-gray-600 text-sm">Post Date: {data.post_date}</p>
        <p className="text-gray-700 font-medium">Author: {data.author} | Tag: {data.education}</p>
      </div>

      {/* Short Info */}
      <Card className="border border-blue-200">
        <CardContent className="p-4 text-gray-700 leading-relaxed">
          <span className="font-bold text-red-600">Short Information:</span> {data.short_info}
        </CardContent>
      </Card>

      {/* Important Dates */}
      <Section title="Important Dates (Tentative)">
        {Object.entries(data.important_dates).map(([key,val])=>(
          <ListItem key={key} label={formatKey(key)} value={val}/>
        ))}
      </Section>

      {/* Application Fee */}
      <Section title="Application Fee (Tentative)">
        {Object.entries(data.application_fee).map(([key,val])=>(
          <ListItem key={key} label={formatKey(key)} value={val}/>
        ))}
      </Section>

      {/* Age Limit */}
      <Section title="Age Limit">
        <ListItem label="As On" value={data.age_limit.as_on}/>
        <ListItem label="Minimum Age" value={data.age_limit.minimum}/>
        <ListItem label="Maximum Age" value={data.age_limit.maximum}/>
        <ListItem label="Age Relaxation" value={data.age_limit.age_relaxation}/>
      </Section>

      {/* Vacancy */}
      <Section title="Vacancy Details">
        <p className="font-bold text-lg text-green-600">Total Posts: {data.vacancy_details.total_posts}</p>
      </Section>

      {/* Post Wise Vacancy */}
      <Section title="Post Wise Vacancy Details">
        <ul className="list-disc pl-6 space-y-1">
          {data.post_wise_vacancy.map((post,i)=>(
            <li key={i}>{post}</li>
          ))}
        </ul>
      </Section>

      {/* Selection Process */}
      <Section title="Selection Process">
        <ul className="list-decimal pl-6 space-y-1">
          {data.selection_process.map((item,i)=>(
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Important Links */}
      <Section title="Important Links">
        {Object.entries(data.important_links).map(([key,val])=>(
          <Link key={key} href={val} target="_blank" className="block text-blue-600 hover:underline">
             {formatKey(key)}
          </Link>
        ))}
      </Section>
    </div>
  )
}

function Section({title, children}:{title:string, children:any}) {
  return (
    <Card className="border shadow-sm">
      <CardContent className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-blue-600 border-b pb-2">{title}</h2>
        {children}
      </CardContent>
    </Card>
  )
}

function ListItem({label,value}:{label:string,value:string}) {
  return (
    <p className="flex justify-between border-b py-1 text-gray-700">
      <span className="font-medium">{label}:</span>
      <span>{value}</span>
    </p>
  )
}

function formatKey(key:string){
  return key.replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase())
}
