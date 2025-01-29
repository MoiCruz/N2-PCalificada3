import Appbar from "../Components/Appbar"
import Main from "../Components/Main"

export function Services() {
  return (
    <>
   <Appbar />
     <Main>
    <div className='w-full bg-gradient-to-bl from-amber-50 via-slate-100 to-slate-100 md:h-screen justify-items-center relative'>
        <img src="../public/2.services/illustration1.png" alt="" className='size-72 absolute ms-72 my-40' />
        <div className=' justify-items-center w-xl pt-14'>
          <h1 className='font-black text-4xl'>Service</h1>
          <p className=' text-center pt-6 pb-32 text-gl'>We offer youth with chances for career development in their practice. We also support a wide range of services to ensure client satisfaction</p>
        </div>
        <div className='md:flex gap-5 justify-center md:items-end w-full'>

          <div className='w-80 h-auto justify-items-center bg-white rounded-4xl content-end pb-10 px-7'>
            <img src="/public/2.services/icon1.png" alt="" className='size-32 my-20' />
            <div className='content-start'>
              <h3 className='font-bold pb-7 '>Send Text Instantly</h3>
              <p className='text-start pb-12 text-md'>Financial planning, forecasting and adjusting rapidly with customer demands and budgets</p>
              <span className='flex text-blue-500 font-bold items-center'>Learn More
                <img src="../public/2.services/arrow.svg" alt="" className='w-12 h-8' />
              </span>
            </div>
          </div>
          <div className='w-80 h-auto justify-items-center bg-white  rounded-4xl content-end pb-10 px-7'>
            <img src="/public/2.services/icon2.png" alt="" className='size-32 my-20' />
            <div className='content-start'>
              <h3 className='font-bold pb-7 '>Better Organized</h3>
              <p className='text-start pb-12 text-md'>Latest technology and experienced guidanced guidance, trained HR specialists to keep update.</p>
              <span className='flex text-blue-500 font-bold items-center'>Learn More
                <img src="../public/2.services/arrow.svg" alt="" className='w-12 h-8' />
              </span>
            </div>
          </div>
          <div className='w-80 h-auto justify-items-center bg-white rounded-4xl content-end pb-10 px-7'>
            <img src="/public/2.services/icon3.png" alt="" className='size-32 my-20' />
            <div className='content-start'>
              <h3 className='font-bold pb-7 '>Analytical Statistics</h3>
              <p className='text-start pb-12 text-md'>Messages, real-time remiders, memos, and many more will keep your team in sync.</p>
              <span className='flex text-blue-500 font-bold items-center'>Learn More
                <img src="../public/2.services/arrow.svg" alt="" className='w-12 h-8' />
              </span>
            </div>
          </div>
        </div>
      </div>
      </Main>

      </>

  )
}
