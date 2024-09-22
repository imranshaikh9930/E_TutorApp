import { useState } from 'react'

const NavbarBanner = () => {
  const [isOpen,setIsOpen] = useState(true);
  return (

    <>
      {
        isOpen && <div className='hidden lg:flex bg-[#FFCF3A] w-[100%] flex items-start gap-4 py-1 px-7'>
        <div></div>
        <div className='flex items-center justify-center gap-[.5rem] text-center w-[100%]'>
        <p className='text-center font-bold'> Are you a university or school student for an online tutoring
        partnership?</p>
        <a href="#" className="text-secondary font-semibold">Talk To Us</a>

        </div>
        <div className="cursor-pointer font-bold" onClick={()=>setIsOpen(false)}>
            X
        </div>
    </div>
      }
    </>
    
  )
}

export default NavbarBanner