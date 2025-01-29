import React from 'react'
import Appbar from '../Components/Appbar'
import Main from '../Components/Main'

export default function Details() {
  return (
    <>
    <Appbar />
      <Main>
    
    <div className='flex flex-col bg-slate-100 h-full w-full items-center'>
      <div className='flex justify-end py-10 w-5xl'>
        <img src="../3.details/illustration3.png" alt="" className='size-[352px] mx-14' />
        <div className='w-88 h-80 mx-14 flex flex-col gap-5 pt-15 px-2'>
          <h1 className='font-black text-3xl'>A xreative team which builds stunning UI/UX</h1>
          <p className='text-start text-xs '>Today, i'd like tu show you some incredible Sing screen app UI ideas and concepts that offer a modern experience. The most stunning, cutting edge UI/UX</p>
          <p className='text-start text-xs '>Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <span className='font-black'>ThemWagon</span></p>
          <button className='bg-white w-22 h-9 rounded-lg text-sm font-black bg-gradient-to-br from-pink-400 to-blue-400 bg-clip-text text-transparent border-2 border-blue-200'>Read More</button>
        </div>

      </div>
      <div className='flex justify-start py-10 w-5xl'>
        <div className='w-88 h-80 mx-14 flex flex-col gap-5 pt-15 px-2 justify-end'>
          <h1 className='font-black text-3xl'>Devoted to defining the cutting edge</h1>
          <p className='text-start text-xs '>"This new creation is cutting-edge technology," says the reseacher, "whose study originates from a business at the forefront of space science."</p>
          <p className='text-start text-xs '>Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <span className='font-black'>ThemWagon</span></p>
          <button className=' w-22 h-9 rounded-lg text-sm border-2 border-blue-200 font-black bg-gradient-to-br from-pink-400 to-blue-500 bg-clip-text text-transparent'>Read More</button>
        </div>
        <img src="../3.details/illustration6.png" alt="" className='size-[352px] mx-14' />


      </div>
    </div>
    </Main>

  </>

  )
}





