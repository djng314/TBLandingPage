import React from 'react'
import { motion } from 'framer-motion'
import whitetextlogo from '../public/assets/brand/WhiteFontLogo.png'
import Image from 'next/image'
import SadFace from '../public/assets/SadFace.png'
import Link from 'next/link'

function About() {
    return (
        <div id='about' className='hover:scale-110 ease-in duration-100 bg-blue-400 rounded-t-xl rounded-b-xl shadow-gray-800 shadow-2xl w-[85vw] md:h-[75vh] flex items-center '>
            <div className='sm:max-w-[90%] md:max-w-[90%] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2 items-center py-20'>
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center md:text-left'>We are sorry</h1>
                    <h2 className='pt-5 text-white font-light text-l md:text-xl lg:text-2xl text-center md:text-left'>Great things take time. We are still under development.</h2>
                    <p className='hidden md:flex text-center md:text-left text-white pt-5'>Feel free to join our mailing list through the contact form below to stay updated with our latest news!</p>
                    <div className='pt-5 max-w-[100vw] text-center md:text-left md:max-w-[30vw] items-start justify-start'>
                        <Link href='/#newsletter'>
                            <button className=' px-5 py-2 font-bold rounded-xl  bg-white  text-blue-400 hover:scale-105 ease-in duration-200'>Can I get notified once TB is ready?</button>
                        </Link>

                    </div>
                </div>

                <div className='md:w-full h-[50%] rounded-full scale-95'>
                    <div className='h-[20%]'></div>
                    <Image src={SadFace} className="rounded-full hover:scale-105 ease-in duration-300" alt='/' />
                </div>
            </div>
        </div>
    )
}

export default About