import React from 'react'
import Appbar from '../Components/Appbar'
import Main from '../Components/Main'
export default function Contact() {

  return (
    <>
      <Appbar />
      <Main>
        <div className='relative flex flex-col item-center w-full h-screen bg-amber-300 pt-3 '>
          <div className='flex justify-center'>
          <img src="../7.contact/image1.png" alt="" className='absolute' />
          <h1 className='font-black text-4xl'>Contact Us</h1>
          </div>
          <div className='flex bg-blue-600 justify-center items-center h-screen mx-90 gap-20'>
            <div className='bg-amber-700 flex flex-col gap-8 p-8 rounded-3xl'>
              <input type="display" placeholder='Write your name' className='h-12 w-sm border-2 rounded-3xl' />
              <input type="text" placeholder='Write your email' className='h-12 w-sm border-2 rounded-3xl' />
              <input type="text" placeholder='Write your message' className='h-40 w-sm border-2 rounded-3xl' />
              <button className='text-star h-12 w-sm rounded-3xl text-white font-bold bg-gradient-to-br from-pink-300 to-blue-800 hover:text-lg'>Submit</button>
            </div>
            <div className='bg-emerald-500 flex flex-col gap-10'>
              <div className=''>
                <div className='flex'>
                  <span className='bg-white rounded-b-full size-8'>
                  <img src="../7.contact/phone.svg" alt="" className='' />
                  </span>
                  <p className='font-bold'>Phone</p>
                </div>
                <p className=''>+880124332334</p>
              </div>
              <div className=''>
                <div className='flex'>
                  <span className='bg-white rounded-b-full size-8'>
                  <img src="../7.contact/mail.svg" alt="" className='' />
                  </span>
                  <p className='font-bold'>Email</p>
                </div>
                <p className=''>something@email.com</p>
              </div>
              <div className=''>
                <div className='flex flex-col'>
                  <span className='bg-white rounded-b-full size-8'>
                  <img src="../7.contact/location.svg" alt="" className='' />
                  </span>
                  <p className='font-bold'>Location</p>
                </div>
                <p className=''>43/A Spooner Street St laurence, Virginia, Texas</p>
              </div>

            </div>
          </div>
        </div>
      </Main>
    </>
  )
}
