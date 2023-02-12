import React from 'react'
import { Inter } from '@next/font/google'
import { Oswald } from '@next/font/google'
import Link from 'next/link'
import NextLink from "next/link"
import { useRouter } from 'next/router'

const oswald = Oswald({
    weight: '700',
    subsets: ['latin']
})

const Homepage = () => {

  return (
    <NextLink href="/">
    <div>
        <div className={oswald.className}>
            <div className='flex text-8xl justify-center drop-shadow-xl' onClick={() => window.location.reload()}>
                <div className=' text-green-600'  >E</div>
                <div className=' text-red-600'>L</div>
                <div className=' text-orange-500'>G</div>
                <div className=' text-purple-600'>O</div>
                <div className='text-green-600'>O</div>
                <div className='text-orange-500'>G</div>
            </div>
        </div>
    </div>
    </NextLink>
  )
}

export default Homepage