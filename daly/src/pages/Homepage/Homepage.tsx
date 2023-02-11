import React from 'react'
import { Inter } from '@next/font/google'
import { Oswald } from '@next/font/google'

const oswald = Oswald({
    weight: '400',
    subsets: ['latin']
})

const Homepage = () => {
  return (
    <div >
        <div className={oswald.className}>
            <h1 className='flex text-8xl justify-center drop-shadow-xl'>
                <div className=' text-green-600'  >E</div>
                <div className=' text-red-600'>L</div>
                <div className=' text-orange-500'>G</div>
                <div className=' text-purple-600'>O</div>
                <div className='text-green-600'>O</div>
                <div className='text-orange-500'>G</div>
            </h1>
        </div>
    </div>
  )
}

export default Homepage