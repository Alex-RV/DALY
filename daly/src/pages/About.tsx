import React from 'react'
import { Oswald } from '@next/font/google'
import Container from 'components/Container'

const oswald = Oswald({
    weight: '700',
    subsets: ['latin']
})

const About = () => {
  return (
    <div className={oswald.className}>
        <div className='bg-[#f9fafb] p-20 dark:bg-[#131415] pb-52'>
            <div className='flex flex-column justify-center text-center dark:text-[#f9fafb]'>
                <div>
                <h1 className='text-8xl my-4'>About</h1>   
                <p className=' text-4xl my-4'>El goog is a search engine dedicated to getting the wrong answers right</p> 
                </div>
            </div>
        </div> 
        <Container/>
    </div>
    
  )
}

export default About