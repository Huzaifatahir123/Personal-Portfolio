import React from 'react'
import assets from '../assets/assets'
import {motion,easeInOut, circInOut} from "framer-motion"
import {parent,fadeInUp,revealeffect, parent1} from "../animations/navanimation"
const Service = () => {
  return (
    <section id='services'>
<motion.div className='flex px-4 flex-col dark:bg-dark dark:text-white gap-12 sm:px-12 lg:px-24 xl:px-40 py-20'>
          <motion.div className='flex flex-col gap-4 justify-center items-center'>
            <motion.p className='text-lg'>What i offer</motion.p>
            <motion.h1 className='text-3xl text-secondary font-bold'>My Services</motion.h1>
            <motion.p className='text-sm text-secondary max-sm:text-center'>I am a Full Stack developer from Pakistan with 2 years of experience in multiple <br className='max-sm:hidden' />
companies</motion.p>
          </motion.div>
        
          <motion.div variants={parent1} viewport={{once:true}} initial = "hidden" whileInView="visible" transition={{ease:easeInOut, duration:0.5}}  className='flex gap-4 flex-wrap'>
        
            <motion.div 
           variants={fadeInUp} className='  max-sm:min-w-48 flex-1 flex dark:text-black flex-col px-8 py-4 hover:shadow-fuchsia-400 duration-300 ease-in-out rounded-xl bg-white shadow-xl shadow-gray-400 gap-4 '>
                <motion.img className='w-12' src={assets.web_icon} alt="" />
                <motion.h1 className='text-3xl font-bold'>Frontend </motion.h1>
                <motion.p className='text-lg text-gray-600'>Crafting modern, responsive, and interactive user interfaces using React.js and Tailwind CSS. I focus on creating clean designs, smooth animations, and layouts that adapt perfectly to all devices. </motion.p>
 
            </motion.div>
            <motion.div variants={fadeInUp} className='  max-sm:min-w-48  flex-1 flex flex-col dark:text-black px-8 py-4 hover:shadow-fuchsia-400 duration-300 ease-in-out rounded-xl bg-white shadow-xl shadow-gray-400 gap-4 '>
                <motion.img className='w-12' src={assets.web_icon} alt="" />
                <motion.h1 className='text-3xl font-bold'>Backend </motion.h1>
                <motion.p className='text-lg text-gray-600'>Building and experimenting with server-side applications using Node.js, Express.js, and MongoDB. Currently enhancing my skills in APIs, database management, and backend optimization. </motion.p>

            </motion.div>
            <motion.div variants={fadeInUp} className='  max-sm:min-w-48  flex-1 flex dark:text-black flex-col px-8 py-4 hover:shadow-fuchsia-400 duration-300 ease-in-out rounded-xl bg-white shadow-xl shadow-gray-400 gap-4 '>
                <motion.img className='w-12' src={assets.web_icon} alt="" />
                <motion.h1 className='text-3xl font-bold'>Full Stack </motion.h1>
                <motion.p className='text-lg text-gray-600'>Combining my frontend expertise with growing backend knowledge to develop complete MERN stack applications. I aim to deliver projects that are both visually appealing and functionally robust</motion.p>
                
            </motion.div>

          </motion.div>
    </motion.div>
    </section>
    
  )
}

export default Service