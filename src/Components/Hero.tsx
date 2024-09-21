// import React from 'react';
import { motion } from 'framer-motion';
import banner1 from "../assets/hero.png";
import { SlideRight } from '../Utility/Animation';
const Hero = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative place-content-center">
        <div className='flex flex-col items-center justify-center py-14 md:pr-16 xl:pr-40 md:py-0'>
            <div className="text-center md:text-left space-y-6">

            <motion.p 
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
            className="text-orange-600 uppercase font-semibold">100% Satisfaction Guarantee</motion.p>
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
            className="text-5xl lg:text-6xl font-extrabold">Find Your Perfect Tutor</motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
            className="text-gray-600 xl:max-w-[500px] ">We help you find perfect tutor for 1-on-1 lessons. It is completely free and private</motion.p>
            <motion.div 
              variants={SlideRight(1)}
              initial="hidden"
              animate="visible"
            className='flex items-center gap-4'>
                <button className="primary-btn flex items-center gap-2 text-black">Get Started</button>
                <button className='flex items-center'>
                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-secondary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg></span>
                    See how it works</button>
            </motion.div>
            </div>
        </div>
        <div>
          <motion.img 
            initial={{opacity:0,x:200}}
            animate={{opacity:1,x:0}}
            transition={{type:"spring",stiffness:100,delay:0.2}}
            src={banner1} alt="" 
            className="w-[350px] md:w-[550px] xl:w-[700px]"
            />
        </div>
    </div>
  )
}

export default Hero