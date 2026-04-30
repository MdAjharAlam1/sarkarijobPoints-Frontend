import React from 'react'

const LoaderPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-blue-600 rounded-full animate-ping"></span>
        <span className="w-4 h-4 bg-red-600 rounded-full animate-ping delay-200"></span>
        <span className="w-4 h-4 bg-green-600 rounded-full animate-ping delay-500"></span>
      </div>
    </div>
  )
}

export default LoaderPage