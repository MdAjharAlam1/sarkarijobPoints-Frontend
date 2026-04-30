export default function Contact() {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
  
        <p>For queries, suggestions or feedback, feel free to contact us:</p>
  
        <div className="space-y-2">
          <p><strong>Email:</strong> sarkaripoints8@gmail.com</p>
          <p><strong>Website:</strong> www.sarkaripoints.in</p>
        </div>
  
        <p>
          You can contact us regarding government job alerts, advertisement corrections,
          partnership or content update-related questions.
        </p>
      </div>
    )
}



















// "use client"
// import { useState } from "react"

// export default function Contact() {

//   const [form, setForm] = useState({ name: "", email: "", message: "" })
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e:any) => {
//     e.preventDefault()

//     // Here later you can integrate backend / email sending API
//     console.log("Form Submitted:", form)

//     setSubmitted(true)
//     setTimeout(() => setSubmitted(false), 3000)
//     setForm({ name: "", email: "", message: "" })
//   }

//   return (
//     <div className="max-w-2xl mx-auto px-4 py-10">
      
//       <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
//       <p className="text-center text-gray-600 mb-8">
//         Have questions or suggestions? Reach out to us!
//       </p>

//       {/* SUCCESS MESSAGE */}
//       {submitted && (
//         <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
//           Message Sent Successfully! We’ll get back to you soon.
//         </div>
//       )}

//       {/* FORM */}
//       <form onSubmit={handleSubmit} className="space-y-5">

//         <div>
//           <label className="font-medium">Full Name</label>
//           <input 
//             type="text" 
//             required
//             value={form.name}
//             onChange={(e)=>setForm({...form, name:e.target.value})}
//             className="w-full mt-1 p-3 border rounded outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your name"
//           />
//         </div>

//         <div>
//           <label className="font-medium">Email Address</label>
//           <input 
//             type="email" 
//             required
//             value={form.email}
//             onChange={(e)=>setForm({...form, email:e.target.value})}
//             className="w-full mt-1 p-3 border rounded outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your email"
//           />
//         </div>

//         <div>
//           <label className="font-medium">Your Message</label>
//           <textarea
//             required
//             rows={4}
//             value={form.message}
//             onChange={(e)=>setForm({...form, message:e.target.value})}
//             className="w-full mt-1 p-3 border rounded outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Write your message..."
//           ></textarea>
//         </div>

//         <button 
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
//         >
//           Send Message
//         </button>

//       </form>
//     </div>
//   )
// }
  