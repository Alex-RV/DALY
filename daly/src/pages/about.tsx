import Container from 'components/Container'
import Image from 'next/image'
import React from 'react'

export default function about() {
  return (
    <Container
    title="About – Elgoog"
    description="About Page">
      <div className="flex flex-col items-start max-w-3xl mx-auto my-16">
        <div className='flex flex-row sm:mb-1 mb-5'>
          <div className='flex flex-col h-full '>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            About
            </h1>
          </div>
        
        <div className="w-[80px] sm:w-[250px] ml-5 sm:ml-40 relative justify-self-end mb-8 sm:mb-0 mr-auto">
        </div>
        </div>
        
        <div data-aos="fade-up" className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
          El goog is a search engine dedicated to getting the wrong answers right
          </p>
          <h3 className="text-gray-600 dark:text-gray-400 font-bold text-2xl mb-4">
          Why Elgoog
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
          El Goog can be a relief from boredom
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
          It also can be a great search engine alternative
          </p>
          <Image
            alt="photo"
            height={1500}
            width={1500}
            src="/screen.png"
            sizes="30vw"
            priority
            className=" filter"
          />
        </div>
        </div>
        
    </Container>
  )
}