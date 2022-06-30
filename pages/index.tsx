import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import whitetextlogo from '../public/assets/brand/WhiteFontLogo.png'
import TravelBG from '../public/assets/brand/TravelBackground.png'
import About from '../components/About'
import Link from 'next/link'
import Contact from '../components/ContactForm'

import mongoose from 'mongoose'






const Home: NextPage = () => {
  return (
    <div id='home' className="flex min-h-screen flex-col items-center justify-center pt-5 md:pt-10">
      <Head>
        <title>T-Blog</title>
        <link rel="icon" href="/assets/brand/PurpleFontLogo.png" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center sm:text-center">
        <div className='h-[5vh]'></div>
        <div  className='md:hover:scale-110 ease-in duration-100 bg-purple-400 rounded-t-xl rounded-b-xl  shadow-gray-800 shadow-2xl  w-[85vw] md:h-[75vh]  flex items-center '>
          <div className='sm:max-w-[90%] md:max-w-[90%] m-auto md:grid grid-cols-3 gap-8'>

            <div className=' md:w-full h-[50%]  rounded-xl scale-95'>
              <div className='h-[20%]'></div>
              <Image src={TravelBG} className=" rounded-2xl animate-spin-slow " alt='/' />
            </div>
            <div className='col-span-2 items-center py-20'>
              <h1 className='font-bold text-6xl md:text-6xl lg:text-7xl text-white text-center md:text-left'>TB</h1>
              <h2 className='pt-5 text-white font-light text-xl md:text-2xl lg:text-3xl text-center md:text-left'>The new bestfriend of travel bloggers!</h2>
              <p className='hidden md:flex text-center md:text-left text-white pt-5'>We are a platform that is designed to connect travellers and allow travellers to share resources and information while making lifelong freidnships!</p>
              <p className='flex md:hidden text-center text-white pt-5'>We allow travellers to connect and share information while making lifelong freidnships!</p>
              <div className='h-[5vh]'></div>
              <div className='max-w-[100vw] text-center md:text-left md:max-w-[20vw] items-start justify-start'>
                <Link href='/#about'>
                <button  className=' px-5 py-2 font-bold rounded-xl  bg-white  text-purple-400 hover:scale-105 ease-in duration-200'> Cool, I want to be part of it!</button>
                </Link>
                
              </div>

            </div>

          </div>
        </div>
        <div className='h-[15vh]'></div>
        <About />
        <div className='h-[15vh]'></div>

        <Contact/>
        <div className='h-[15vh]'></div>
      </main>



    </div>
  )
}

export default Home
