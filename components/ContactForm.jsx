import React from "react";
import { motion } from "framer-motion";
import whitetextlogo from "../public/assets/brand/WhiteFontLogo.png";
import Image from "next/image";
import Mail from "../public/assets/Mail.png";

function Contact() {
  return (
    <div
      id="newsletter"
      className="hover:scale-110 ease-in duration-100 bg-red-400 rounded-t-xl rounded-b-xl shadow-gray-800 shadow-2xl w-[85vw] h-[100vh] md:h-[75vh] flex items-center "
    >
      <div className="max-w-[90%] px-5 md:max-w-[90%] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="md:w-full h-[50%] rounded-full scale-95">
          <div className="h-[20%]"></div>
          <Image
            src={Mail}
            className="rounded-full hover:scale-105 ease-in duration-300"
            alt="/"
          />
        </div>
        <div className="max-w-[90%] col-span-2 max-h-[33vh] items-center  py-0 rounded-md ">
        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center md:text-left'>Keep me posted</h1>
        <h2 className='pt-5 pb-5 text-white font-light text-l md:text-xl lg:text-2xl text-center md:text-left'>Fill up the form below and we will keep you updated with newsletter!</h2>
          <form
            className="text-center md:text-left"
            action="/api/form"
            method="post"
          >
            <div className="pl-5">
              <div className="pt-2">
                <label className="text-lg font-bold pr-2 text-white" htmlFor="preferred">
                  What is your preferred name?
                </label>
                <input placeholder="Preferred name here" className="bg-red-400 placeholder:text-gray-200 text-lg font-regular pr-2 text-white" type="text" id="preferred" name="preferred" required />
              </div>
              <div className="pt-2">
                <label className="text-lg font-bold pr-2 text-white" htmlFor="email">
                  What is your email?
                </label>
                <input placeholder="Email here" className="bg-red-400 placeholder:text-gray-200 text-lg font-regular pr-2 text-white" type="email" id="email" name="email" required />
              </div>
            </div>

            <div className="pl-5 pt-5">
              {" "}
              <button
                className="px-9 py-1 font-bold rounded-xl  bg-white  text-red-400 hover:scale-105 ease-in duration-200"
                type="submit"
              >
                Sign me up!
              </button>
            </div>
            <p className=' text-white  text-xs pt-5 pl-5 text-center md:text-left'>By filling up this form, you consent to our privacy policy and to be contacted by us through email.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
