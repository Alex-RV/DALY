import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Container from 'components/Container'
import Homepage from './Homepage/Homepage'
import SearchForm from 'components/SearchForm'
import { useState } from 'react'
import {Item} from './api/get_search'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [searchResponseData, setSearchResponseData]= useState({items:[]});
  return (
    <div>
        <Container>
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
            <div className='m-2 mb-4'>
              <div>
               <a href={item.formattedUrl}>
              <div className='text-black dark:text-white '>
                <cite>{item.formattedUrl}</cite>
              </div>

              <div className='text-blue-600 dark:text-blue-400 text-xl'>
              {item.title}
              </div>
              </a>
              </div>
              <div className='text-black dark:text-gray-400 '>
                <h1>{item.snippet}</h1>
              </div>
           </div>
          ))}
        </div>
        </div>
        </Container>
    </div>

        
  )
}
