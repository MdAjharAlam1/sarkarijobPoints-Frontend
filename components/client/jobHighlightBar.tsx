"use client"


const Jobs  = [
    { title:"RRB Group D Exam City / Admit Card", color:"bg-red-600" },
    { title:"UPSSSC Lekhpal Form 2025 (7994 Post)", color:"bg-orange-500" },
    { title:"SSC GD Constable Form (25487 Posts)", color:"bg-pink-500" },
    { title:"UP Anganwadi Bharti 2025 (57,862 Post)", color:"bg-indigo-600" },
    { title:"UP Police Computer Operator Online Form", color:"bg-green-700" },
    { title:"DSSSB MTS Online Form 2025 (714 Posts)", color:"bg-blue-600" },
]

const JobHighLightBar = ()=>{

    return(
            <div className="py-3 max-w-7xl mx-auto mt-4 px-4">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {Jobs.map((job,i)=>(
                    <div
                        key={i}
                        className={`${job.color} text-white text-xs px-4 py-3  font-medium  rounded  cursor-pointer hover:opacity-90 hover:underline`}
                    >
                        {job.title}
                    </div>
                    ))}
                </div>
            </div>
    )
}

export default JobHighLightBar