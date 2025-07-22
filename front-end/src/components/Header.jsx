import React from 'react'

const Header = () => {
  return (
  <header className='shadow-md'>
    <div className='flex items-center justify-between px-8 py-2 max-w-7xl mx-auto '>
      <div className="flex items-center ">
        <p className="text-primary-400 text-2xl font-bold">HostBNB</p>
      </div>

      <div className='flex items-center border border-gray-300 pr-4 py-2 pl-6 rounded-full shadow-md'>
        <p className='pr-4 border-r border-gray-300 '>Qualquer lugar</p>
        <p className='pr-4 border-r border-gray-300 px-4  '>Qualquer semana</p>
        <p className='px-4'>Hospedes?</p>
        
        <div className="bg-primary-400 rounded-full p-2 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </div>

      </div>

      <div className='flex items-center border border-gray-300 pr-4 py-2 pl-6 rounded-full shadow-md gap-1.5'>
      
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>


      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>

       <p>Diego Lima</p>
      </div>

    </div>
  </header>
  )
}

export default Header