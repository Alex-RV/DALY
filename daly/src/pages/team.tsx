import Container from 'components/Container'
import React from 'react'
import Image from 'next/image'

export default function team() {
  return (
    <Container>
        <div className="flex flex-col items-start max-w-3xl mx-auto my-36">
        <div className='flex flex-col  sm:mb-1 mb-5'>
          <div className='flex flex-col '>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-16 text-black dark:text-white">
            Our Team:
            </h1>
          </div>
          <div className='grid gap-10 flex-row grid-cols-2'>
          <Image
            alt="photo"
            height={300}
            width={300}
            src="/screen.png"
            sizes="30vw"
            priority
            className="rounded-full filter mb-5"
          />
          <Image
            alt="photo"
            height={300}
            width={300}
            src="/screen.png"
            sizes="30vw"
            priority
            className="rounded-full filter mb-5"
          />
          <Image
            alt="photo"
            height={300}
            width={300}
            src="/screen.png"
            sizes="30vw"
            priority
            className="rounded-full filter mb-16"
          /><Image
          alt="photo"
          height={300}
          width={300}
          src="/screen.png"
          sizes="30vw"
          priority
          className="rounded-full filter mb-16"
        />
          </div>
          </div>
          </div>
    </Container>
    
  )
}
