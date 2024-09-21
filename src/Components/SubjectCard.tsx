import React from 'react'
import { FaComputer, FaBook } from "react-icons/fa6";
import { motion } from 'framer-motion';
const SubjectCard = () => {
    const subjectList = [
        {
          id: 1,
          name: "Engineering",
          icon: <FaComputer />,
          color: "#0063ff",
          delay: 0.2,
        },
        {
          id: 2,
          name: "English",
          icon: <FaBook />,
          color: "#00c986",
          delay: 0.3,
        },
        {
          id: 3,
          name: "Programming",
          icon: <FaComputer />,
          color: "#922aee",
          delay: 0.4,
        },
        {
          id: 4,
          name: "Science",
          icon: <FaBook />,
          color: "#ea7516",
          delay: 0.5,
        },
        {
          id: 5,
          name: "History",
          icon: <FaBook />,
          color: "#075267",
          delay: 0.6,
        },
        {
          id: 6,
          name: "Psychology",
          icon: <FaBook />,
          color: "#986d1d",
          delay: 0.7,
        },
        {
          id: 7,
          name: "Web design",
          icon: <FaBook />,
          color: "#b93838",
          delay: 0.8,
        },
        {
          id: 8,
          name: "See all",
          icon: <FaBook />,
          color: "#464646",
          delay: 0.9,
        },
      ];
  return (
    <div className="container  py-14 md:py-24  mx-auto p-6 space-y-4 ">
      <div className="text-center w-[100%]">
        <h1 className="text-orange-600 text-center font-bold">OuR TUTOR SUBJECT</h1>
        <p className="font-semibold text-3xl py-1 text-nowrap">Find Online Tutor in Any Subject</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* card */}
      {subjectList.map((item)=>
       <motion.div
       initial={{opacity:0,x:-200}}
       whileInView={{opacity:1,x:0}}
       transition={{
        type:"spring",
        stiffness:100,
        delay:item.delay
       }}

       
       className="border rounded-lg p-4 border-secondary/20 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer">
       <div
        style={{
          color:item.color,
          backgroundColor:item.color+"20"
        }}
       className="w-10 h-10 rounded-md flex justify-center items-center">
         
         {/* icons */}
         {item.icon}
       </div>
       <p>
         {/* SubjectName */}
         {item.name}
       </p>
       </motion.div>
      )}
     
      </div>
    </div>
  )
}

export default SubjectCard