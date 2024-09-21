import {useState} from 'react';
import { MdComputer, MdMenu } from "react-icons/md";
import {NavbarMenu} from "../data";
import ResponsiveMenu from "./RespnsiveMenu.tsx";
import { motion } from 'framer-motion';


const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <>
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:.5,delay:.5}}

    >

   
  <nav className="container flex justify-between items-center w-[100%] px-4 py-6">

    <div className='flex items-center gap-4 font-bold text-2xl'>
      {/* icon */}
      <MdComputer className="text-3xl text-secondary text-[#0063FF]" />
      <p>E-Tutor</p>
    </div>
    <div className="hidden lg:block">
      <ul className="flex justify-between items-center md:gap-[4rem] ">
      {
        NavbarMenu.map((nav)=>
        <li className="">
          <a href={nav.link} className='inline-block text-gray-600 text-sm xl:text-base font-semibold hover:text-[#0063FF] transition-all duration-300'>{nav.title}</a>
        </li>)
      }
      </ul>
     
    </div>
    <div className="hidden lg:flex items-center gap-8 ">
      <button>Sign in</button>
      <button className="bg-[#0063FF] text-white rounded-2xl px-4 py-1.5 font-bold ">Register</button>
    </div>
      <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>

  </nav>

  {/* Responsive Mobile View */}
  <ResponsiveMenu isOpen={isOpen} />
  </motion.div>
    </>
  )
}

export default Navbar