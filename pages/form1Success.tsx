import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import whitetextlogo from '../public/assets/Check.png'
import Check from '../public/assets/Check.png'
import About from '../components/About'
import Link from 'next/link'
const Error = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center pt-5 md:pt-10">
            <Head>
                <title>T-Blog</title>
                <link rel="icon" href="/assets/brand/PurpleFontLogo.png" />
            </Head>
            <main className="flex w-full flex-1 flex-col items-center justify-center sm:text-center">
                <div className='h-[5vh]'></div>
                <div id='home' className='md:hover:scale-110 ease-in duration-100 bg-green-400 rounded-t-xl rounded-b-xl  shadow-gray-800 shadow-2xl  w-[85vw] md:h-[75vh]  flex items-center '>
                    <div className='sm:max-w-[90%] md:max-w-[90%] m-auto md:grid grid-cols-3 gap-8'>

                        <div className=' md:w-full h-[50%]  rounded-xl scale-95'>
                            <div className='h-[20%]'></div>
                            <Image src={Check} className=" rounded-2xl " alt='/' />
                        </div>
                        <div className='col-span-2 items-center py-20'>
                            <h1 className='font-bold text-6xl md:text-6xl lg:text-7xl text-white text-center md:text-left'>Thank you</h1>
                            <h2 className='pt-5 text-white font-light text-xl md:text-2xl lg:text-3xl text-center md:text-left'>Your contact details had been recorded.</h2>
                            <p className=' text-center md:text-left text-white pt-5'>We will make sure to keep you updated =D</p>
                            <div className='h-[5vh]'></div>
                            <div className='max-w-[100vw] md:max-w-[19vw] items-start text-center md:text-left justify-start'>
                                <Link href='/'>
                                    <button className=' px-5 py-1 font-bold rounded-xl  bg-white  text-green-400 hover:scale-105 ease-in duration-200'> Okie! I am excited! </button>
                                </Link>

                            </div>

                        </div>

                    </div>
                </div>

            </main>



        </div>
    )
}

export default Error
