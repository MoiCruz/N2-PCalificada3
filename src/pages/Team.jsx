import React from 'react'
import Appbar from '../Components/Appbar'
import Main from '../Components/Main'

export default function Team() {
  return (
    <>
      <Appbar />
      <Main>
        <div className='flex flex-col content-center'>
          <div className=' justify-items-center pt-2'>
            <h1 className='font-black text-4xl'>Our team</h1>
            <p className=' text-center pt-6 pb-4 text-gl w-135'>People from various origins, cultures, and personalities make up our team. This blend makes it a powerful team</p>
          </div>
          <div className='flex gap-10 justify-items-center md:px-82 mt-16'>
            <div className='Flex flex-col justify-items-center mb-5 h-125'>
              <img src="../6.team/image1.png" alt=""  className='w-70'/>
              <h3 className='font-bold text-2xl'>John Adams</h3>
              <p className='text-lg'>CEO</p>
            </div>
            <div className='Flex flex-col justify-items-center h-125'>
              <img src="../6.team/image2.png" alt=""  className='w-70'/>
              <h3 className='font-bold text-2xl'>Carrey Johnson</h3>
              <p className='text-lg'>Senior Developer</p>
            </div>
            <div className='Flex flex-col justify-items-center h-125'>
              <img src="6.team/image3.png" alt=""  className='w-70'/>
              <h3 className='font-bold text-2xl'>Ray Marie</h3>
              <p className='text-lg'>Developer</p>
            </div>
            <div className='Flex flex-col justify-items-center h-125'>
              <img src="6.team/image4.png" alt=""  className='w-70'/>
              <h3 className='font-bold text-2xl'>Austin Mean</h3>
              <p className='text-lg'>Designer</p>
            </div>

          </div>
          <div className='flex justify-center mb-6 mt-8'>
            <button className='h-10 w-35 font-semibold rounded-xl bg-gradient-to-br from-pink-500 to-blue-400 bg-clip-text text-transparent border-2 border-blue-300 hover:border-pink-500 hover:text-pink-500'>View Full Team</button>
          </div>
        </div>
      </Main>

    </>

  )
}
