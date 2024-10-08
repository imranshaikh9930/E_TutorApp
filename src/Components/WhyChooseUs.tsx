// import React from 'react'
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { SlideLeft } from '../Utility/Animation';
import { motion } from 'framer-motion';
const WhyChooseUs = () => {
    const WhyChooseData = [
        {
          id: 1,
          title: "One-on-one Teaching",
          desc: "All of our special education experts have a degree in special education.",
          icon: <GrYoga />,
          bgColor: "#0063ff",
          delay: 0.3,
        },
        {
          id: 2,
          title: "24/7 Tutor Availability",
          desc: "Our tutors are always available to respond as quick as possible for you",
          link: "/",
          icon: <FaDumbbell />,
          bgColor: "#73bc00",
          delay: 0.6,
        },
        {
          id: 3,
          title: "Interactive Whiteboard",
          desc: "Our digital whiteboard equipped with audio and video chat fetures.",
          link: "/",
          icon: <GiGymBag />,
          bgColor: "#fa6400",
          delay: 0.9,
        },
        {
          id: 4,
          title: "Affordable Prices",
          desc: "Choose an expert tutor based on your budget and per hour.",
          link: "/",
          icon: <GiGymBag />,
          bgColor: "#fe6baa",
          delay: 0.9,
        },
      ];
  return (
    <div className="container py-24">
        
        <div className="space-y-5 p-6 text-center max-w-{500px] mb-5 mx-auto">

        <h1 className="font-semibold text-orange-600">Why Choose Us</h1>
        <p className="text-3xl font-bold">Benefits of online tutoring <br /> services with us</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-7">

            {
                WhyChooseData.map((item,index)=>(
                    <motion.div
                      variants={SlideLeft(item.delay)}
                      initial="hidden"
                      whileInView={"visible"}

                    key={index} className="space-y-4 p-6 shadow-[0_0_22px_rgba(0,0,0,0.15)] rounded-2xl">
                    <div className="w-10 h-10 rounded-lg flex justify-center items-center text-white  "style={{ backgroundColor: item.bgColor }}>
    
                    <div className="text-2xl " >
                        {/* icons */}
                       {item.icon}
                    </div>
                    </div>
    
                    <p className="font-semibold">{item.title}</p>
                    <p className='text-gray-600 text-sm text-justify'>{item.desc}</p>
    
                   
    
                </motion.div>
                ))
            }

        

        </div>

    </div>
  )
}

export default WhyChooseUs