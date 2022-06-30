import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import whitetextlogo from '../public/assets/Compass.png'
import Compass from '../public/assets/Compass.png'
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
                <div id='home' className='md:hover:scale-110 ease-in duration-100 bg-orange-400 rounded-t-xl rounded-b-xl  shadow-gray-800 shadow-2xl  w-[85vw] md:h-[75vh]  flex items-center '>
                    <div className='sm:max-w-[90%] md:max-w-[90%] m-auto md:grid grid-cols-3 gap-8'>

                        <div className=' md:w-full h-[50%]  rounded-xl scale-95'>
                            <div className='h-[20%]'></div>
                            <Image src={Compass} className=" rounded-2xl animate-spin-slow " alt='/' />
                        </div>
                        <div className='col-span-2 items-center py-20'>
                            <h1 className='font-bold text-6xl md:text-6xl lg:text-7xl text-white text-center md:text-left'>404</h1>
                            <h2 className='pt-5 text-white font-light text-xl md:text-2xl lg:text-3xl text-center md:text-left'>It looks like we are lost</h2>
                            <p className=' text-center md:text-left text-white pt-5'>We can't find the page you were looking for.</p>
                            <div className='h-[5vh]'></div>
                            <div className='max-w-[100vw] md:max-w-[19vw] items-start text-center md:text-left justify-start'>
                                <Link href='/'>
                                    <button className=' px-5 py-1 font-bold rounded-xl  bg-white  text-orange-400 hover:scale-105 ease-in duration-200'> Oops, take me back home </button>
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
