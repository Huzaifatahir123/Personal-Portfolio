import React, { useState } from 'react'
import assets from '../assets/assets'
import {motion,easeInOut,AnimatePresence} from "framer-motion"
import {parent,fadeInUp,revealeffect} from "../animations/navanimation"
   
const Navbar = ({theme,settheme}) => {
    const [side,setside] = useState(false);
  return (
<>
    <div className='flex dark:bg-dark justify-between  items-center  px-4 sm:px-4 lg:px-24 xl:px-40 py-5'>
        <div className='flex'>
 <motion.h1
 variants={revealeffect}
             initial = "initial"
             viewport={{once:true}}
             whileInView = "visible" 
             transition={{duration:1,delay:0.2,ease:easeInOut}}
 className='text-3xl dark:text-text font-black '  >
Huzaifa<span className='text-red-500 text-3xl'>.</span>
  </motion.h1>


        </div>



        <div className=' shadow-gray-300 sticky max-sm:hidden  dark:shadow-none  shadow-lg px-6 rounded-2xl py-2 bg-white flex justify-center items-center sm:gap-4  lg:gap-8'>
 <motion.div variants={parent}
 viewport={{once:true}}
 initial='hidden'
  animate='visible' className='flex max-sm:hidden justify-center items-center sm:gap-4  lg:gap-8'>
               
               <motion.a  variants={fadeInUp}className="relative inline-block sm:text-md  lg:text-lg  cursor-pointer 
      after:content-[''] after:absolute after:left-0 after:bottom-0 
      after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-500 
      hover:after:w-full" href="#projects">Projects</motion.a>
               <motion.a variants={fadeInUp} className="relative inline-block sm:text-md  lg:text-lg  cursor-pointer 
      after:content-[''] after:absolute after:left-0 after:bottom-0 
      after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-500 
      hover:after:w-full" href="#services">Services</motion.a>
               <motion.a variants={fadeInUp} className="relative inline-block sm:text-md  lg:text-lg  cursor-pointer 
      after:content-[''] after:absolute after:left-0 after:bottom-0 
      after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-500 
      hover:after:w-full" href="#aboutus">About Us</motion.a>
               <motion.a variants={fadeInUp} className="relative inline-block sm:text-md  lg:text-lg  cursor-pointer 
      after:content-[''] after:absolute after:left-0 after:bottom-0 
      after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-500 
      hover:after:w-full" href="#contactus">Contact Us</motion.a>
               
         </motion.div>

           
        </div>
            <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={theme ? "sun" : "moon"} // key is important for exit/enter
          src={theme ? assets.sun_icon : assets.moon_icon}
          alt="theme icon"
          className="w-10 max-sm:w-6 cursor-pointer"
          onClick={() => settheme((prev) => !prev)}
          initial={{ opacity: 0,y: 50, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, y:[50,-10,0], rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.4, ease:easeInOut }}
        />
      </AnimatePresence>
          <motion.button
         viewport={{once:true}}
          variants={revealeffect}
             initial = "initial"
             whileInView = "visible" 
             transition={{duration:1,delay:0.7,ease:easeInOut}} className='px-6 border-1 dark:border-white border-gray-500 py-2 max-sm:hidden text-black dark:text-white  sm:text-sm lg:text-lg rounded-xl '>
          Connect
         </motion.button>
        
         <motion.img
         variants={revealeffect}
         viewport={{once:true}}
             initial = "initial"
             whileInView = "visible" 
             transition={{duration:1,delay:0.2,ease:easeInOut}} 
         onClick={()=>{
            setside(true)
         }}  src={theme ? assets.menu_white:assets.menu_black} className='w-10   rounded-sm  sm:hidden' alt="" />
    </div>









   <motion.div variants={parent}
   initial='hidden'
   whileInView='visible'
    className={` ${side ? "flex" : "hidden"} z-10 scale-100 border-[0.5px] border-white dark:bg-dark dark:text-white flex sm:hidden w-60 fixed top-0 bottom-0 right-0 bg-white  text-secondary flex-col  justify-center items-center gap-4`}>
               <motion.img variants={fadeInUp} src={theme ? assets.close_white:assets.close_black} onClick={()=>{
                setside(false);
               }} className=' ' alt="" />
               <motion.a onClick={()=>{setside(false)}} className='' variants={fadeInUp} href="#projects">Projects</motion.a>
               <motion.a onClick={()=>{setside(false)}} className='' variants={fadeInUp} href="#services">Services</motion.a>
               <motion.a onClick={()=>{setside(false)}} className='' variants={fadeInUp} href="#contactus">Contact US</motion.a>
               <motion.a onClick={()=>{setside(false)}} className='' variants={fadeInUp} href="#aboutus">About us</motion.a>
              
         </motion.div>
</>


  )
}

export default Navbar