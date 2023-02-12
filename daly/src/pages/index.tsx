import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'

import Container from 'components/Container'
import Homepage from './Homepage/Homepage'
import SearchForm from 'components/SearchForm'
import { useState } from 'react'
import {Item} from './api/get_search'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const [searchResponseData, setSearchResponseData]= useState({items:[]});
  return (
    <Container title="Search – Elgoog"
      description="ELGOOG">
  <div className=' pt-60 bg-[#f9fafb] dark:bg-[#131415] '>
        <div className='pb-40'>
        <div className="flex flex-col justify-center max-w-3xl w-full mx-auto mb-16 border-gray-200 dark:border-gray-700">
        <div className='mb-16'>
        <Homepage/>
        </div>
        <div>
        <SearchForm dataCallBack={data => {
            setSearchResponseData(data)
            console.log(searchResponseData)}}/>
        </div>
        <div>
          {searchResponseData.items.map(item => (
            <div
            // @ts-ignore
            key={item.formattedUrl}
             className='m-2 mb-4'>
              <div>
               <a href={// @ts-ignore
               item.formattedUrl}>
              <div className='text-black dark:text-white '>
                <cite>{// @ts-ignore
                item.formattedUrl}</cite>
              </div>

              <div className='text-blue-600 dark:text-blue-400 text-xl'>
              {// @ts-ignore
              item.title}
              </div>
              </a>
              </div>
              <div className='text-black dark:text-gray-400 '>
                <h1>{// @ts-ignore
                item.snippet}</h1>
              </div>
           </div>
          ))}
        </div>
        </div>
        </div> 
  </div>
</Container>
        
  )
}
