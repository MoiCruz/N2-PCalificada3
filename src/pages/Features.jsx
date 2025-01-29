import React from 'react'
import Appbar from '../Components/Appbar'
import Main from '../Components/Main'

export default function Features() {
  return (
    <>
   
    <Appbar />
      <Main>
    <div className=' h-screen bg-gradient-to-bl from-blue-100 via-white to-blue-100'>
      <div className='justify-items-center'>
        <div className='justify-items-center w-xl pt-2'>
          <h1 className='font-black text-4xl'>Features</h1>
          <p className=' text-center pt-6 pb-6 text-gl'>We provide a number of excellent feature that will undoubtedly improve the user experience. We also provide a better sopport system</p>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-4 my-20'>
        <div className='items-center w-72 flex flex-col gap-3 mx-16'>
          <img src="../4.features/icon1.png" alt="" className='h-24 w-32 mb-5' />
          <h3 className='font-bold'>Encrypted Mail</h3>
          <p className='text-md text-center'>A process of encrypting email communications</p>
        </div>
        <div className='items-center w-72 flex flex-col gap-3 mx-16'>
          <img src="../4.features/icon2.png" alt="" className='h-24 w-32 mb-5' />
          <h3 className='font-bold'>Display Sharing</h3>
          <p className='text-md text-center'>With other participants, you may share your screem</p>
        </div>
        <div className='items-center w-72 flex flex-col gap-3 mx-16'>
          <img src="../4.features/icon3.png" alt="" className='h-24 w-32 mb-5' />
          <h3 className='font-bold'>Private Notebook</h3>
          <p className='text-md text-center'>Private Notebook is an application that is protected</p>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-4 my-20'>
        <div className='items-center w-72 flex flex-col gap-3 mx-16'>
          <img src="../4.features/icon4.png" alt="" className='h-24 w-32 mb-5' />
          <h3 className='font-bold'>App App Assistance</h3>
          <p className='text-md text-center'>App Assistant is quickly and affectively ran the system</p>
        </div>
        <div className='items-center w-72 flex flex-col gap-3 mx-16'>
          <img src="../4.features/icon5.png" alt="" className='h-24 w-32 mb-5' />
          <h3 className='font-bold'>Multiple Printing</h3>
          <p className='text-md text-center'>Our canvas prints are crafted on top-notch canvas.</p>
        </div>
        <div className='items-center w-72 flex flex-col gap-3 mx-16'>
          <img src="../4.features/icon6.png" alt="" className='h-24 w-32 mb-5' />
          <h3 className='font-bold'>Free Sketch</h3>
          <p className='text-md text-center'>Our canvas prints are crafted on top-notch canvas. </p>
        </div>
      </div>
    </div>
    </Main>

    </>

   
  )
}


