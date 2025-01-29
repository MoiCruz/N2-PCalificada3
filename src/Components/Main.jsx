import React from 'react'

function Main({children, className}) {
  return (
    <main className='min-h-[calc(100vh-19rem)] w-full'>
        {children}
    </main>
  )
}
export default Main

