
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 w-full text-gray-300'>
        <div className='py-6 max-w-7xl mx-auto my-6 space-y-6 px-4'>
            
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                <p className="text-sm text-center md:text-left">
                    © 2026 SarkariJobPoints.in | All Rights Reserved
                </p>

                <div className='grid items-center grid-cols-3 md:grid-cols-4 gap-6 text-sm'>
                    <Link className='hover:text-white transition underline' href={"/about"}>About Us</Link>
                    <Link className='hover:text-white transition underline' href={"/contact"}>Contact Us</Link>
                    <Link className='hover:text-white transition underline' href={"/disclaimer"}>Disclaimer</Link>
                    <Link className='hover:text-white transition underline' href={"/privacy"}>Privacy Policy</Link>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Footer