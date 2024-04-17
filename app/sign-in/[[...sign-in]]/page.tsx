import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-[650px] h-80 mt-52 mx-auto'>
      <SignIn />
    </div>
  )
}

export default page;