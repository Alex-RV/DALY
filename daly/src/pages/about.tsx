import Container from 'components/Container'

import React from 'react'

export default function about() {
  return (
    <Container>
    <div>
        <div className='bg-[#f9fafb] p-20 dark:bg-[#131415] pb-52'>
            <div className='flex flex-column justify-center text-center dark:text-[#f9fafb]'>
                <div className="font-bold  tracking-tight mb-4 text-black dark:text-white">
                <h1 className='text-5xl md:text-7xl my-4'>About</h1>   
                <p className='text-2xl md:text-4xl my-4'>El goog is a search engine dedicated to getting the wrong answers right</p> 
                </div>
            </div>
        </div> 
    </div>
    </Container>
  )
}