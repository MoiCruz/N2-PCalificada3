import React from 'react'
import Appbar from '../Components/Appbar'
import Main from '../Components/Main'

export function Home() {
  return (
    <>
      <Appbar />
      <Main>
        <div className='flex flex-col h-full'>
          <div className='flex md:ps-50 relative'>
            <div className='flex flex-col w-138'>
              <h1 className='pt-30 text-6xl font-black bg-gradient-to-br from-pink-300 to-blue-600 bg-clip-text text-transparent'>Bootstrap 5 theme</h1>
              <h2 className='text-5xl pt-5'>crafted by <span className='font-bold'>ThemeWagon</span></h2>
              <p className='text-lg w-120 mb-15 mt-7'>ThemeWagon offer an wide array of category-oriented Free and Premium Bootstrap HTML Templates and Themes</p>
              <button className='h-12 w-40 rounded-lg text-white font-bold bg-gradient-to-br from-pink-400 to-blue-400 hover:text-lg'>Check Demo</button>
            </div>
            <img src="../public/1.home/illustration1.png" alt="" className='w-320 h-108 absolute ms-109' />
          </div>
          <div className='flex w-7xl ms-44 h-85 gap-18 ps-3 place-items-center'>
            <img src="../public/1.home/google.png" alt="" className=' h-13' />
            <img src="../public/1.home/netflix.png" alt="" className=' h-13' />
            <img src="../public/1.home/microsoft.png" alt="" className=' h-13' />
            <img src="../public/1.home/mailbuster.png" alt="" className=' h-13' />
            <img src="../public/1.home/themewagon.png" alt="" className=' h-13' />
          </div>
        </div>


      </Main>
    </>
  )
}

