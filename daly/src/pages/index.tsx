import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Container from 'components/Container'
import Homepage from './Homepage/Homepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <Container>
        <div className="flex flex-col justify-start items-start max-w-3xl w-full mx-auto mb-16 border-gray-200 dark:border-gray-700">
        
        </div>
        </Container>
      <Homepage/>
    </div>

        
  )
}
