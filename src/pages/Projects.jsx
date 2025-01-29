import React from 'react'
import Appbar from '../Components/Appbar'
import Main from '../Components/Main'

export default function Projects() {
  return (
    <>
      <Appbar />
      <Main>
        <div className='flex flex-col justify-center w-full h-full'>
          <div className=' justify-items-center pt-2'>
            <h1 className='font-black text-4xl'>Our Projects</h1>
            <p className=' text-center pt-6 pb-4 text-gl w-xl'>A project is a single or team activity, combining research and design with best effort. Here are some uf our team's projects</p>
          </div>
          <div className='flex gap-5 justify-center py-4'>
            <div className='flex flex-col gap-5'>
              <img src="../5.projects/image1.png" alt="" className='h-50 w-70' />
              <img src="../5.projects/image2.png" alt="" className='w-70' />
            </div>
            <div className='flex flex-col gap-5'>
              <img src="../5.projects/image3.png" alt="" className='w-70' />
              <img src="../5.projects/image4.png" alt="" className='h-50 w-70' />
            </div>
            <div className='flex flex-col gap-5'>
              <img src="../5.projects/image5.png" alt="" className='h-50 w-70' />
              <img src="../5.projects/image6.png" alt="" className='w-70' />
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='h-10 w-25 font-semibold rounded-xl bg-gradient-to-br from-pink-500 to-blue-400 bg-clip-text text-transparent border-2 border-blue-300 hover:border-pink-500 hover:text-pink-500'>View More</button>
          </div>
        </div>




      </Main>
    </>

  )
}
