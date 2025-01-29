import React from 'react'
import { Link } from 'react-router'

function Appbar() {
  return (

     <header className='h-16 flex justify-between px-6 items-center bg-gradient-to-br from-slate-200 via-slate-50 to-blue-100'>
      <nav className='flex gap-20 mx-70 items-center'>
            <a href="/" className=' flex justify-center'>
                <img src="../public/1.home/Klean.png" alt="Klean icon" className='h-11 w-22'/>
            </a>

           
                <ul className='flex gap-4'>
                <li>
                        <Link to="/" className='font-semibold hover:underline hover:text-blue-500'>Home</Link>
                    </li>
                    <li>
                        <Link to="/Services" className='font-semibold hover:underline hover:text-blue-500'>Services</Link>
                    </li>
                    <li>
                        <Link to="/Details" className='font-semibold hover:underline hover:text-blue-500'>Details</Link>
                    </li>
                    <li>
                        <Link to="/Features" className='font-semibold hover:underline hover:text-blue-500'>Features</Link>
                    </li>
                    <li>
                        <Link to="/Projects" className='font-semibold hover:underline hover:text-blue-500'>Projects</Link>
                    </li>
                    <li>
                        <Link to="/Team" className='font-semibold hover:underline hover:text-blue-500'>Team</Link>
                    </li>
                    <li>
                        <Link to="/Contact" className='font-semibold hover:underline hover:text-blue-500'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <nav className='flex gap-15 md:me-105 items-center'>
              <span className='font-semibold text-blue-600 hover:underline hover:text-pink-500'>Log in</span>
              <button className='h-8 w-25 font-semibold rounded-xl bg-gradient-to-br from-pink-400 to-blue-500 bg-clip-text text-transparent border-2 border-blue-300 hover:border-pink-500 hover:text-pink-500'>Sign Up</button>
            </nav>
        </header>
  )
}
export default Appbar

