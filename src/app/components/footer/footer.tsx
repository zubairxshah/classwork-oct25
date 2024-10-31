import React from 'react'
import Timer from '../timer/timer'

const Footer = () => {
  return (
    <footer className="bg-[#90cc75] text-black py-3 rounded-b-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center text-sm">
          <div className="w-full sm:w-auto mb-2 sm:mb-0 text-center sm:text-left">
            <h3 className="text-base font-semibold ml-3">MZS CodeWorks</h3>
            <p className="text-xs mt-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="w-full sm:w-auto text-center sm:text-right">
            <Timer  />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
