import React from 'react'
import assets from '../assets/assets'
import {motion,easeInOut} from "framer-motion"
import {parent,fadeInUp,revealeffect, parent1} from "../animations/navanimation"

const About = () => {
  return (
    <section id='aboutus'>
         <motion.div variants={parent1} viewport={{once:true}} initial = "hidden" whileInView="visible" transition={{ease:easeInOut, duration:0.5}} className='flex px-4 flex-col dark:bg-dark dark:text-white gap-12 sm:px-12 lg:px-24 xl:px-40 py-20'>
            <motion.div variants={fadeInUp} className='flex flex-col gap-2 justify-center items-center'>
                <p className='text-md text-secondary'>introduction</p>
                <h1 className='text-3xl text-secondary'>About me</h1>
            </motion.div>
            <motion.div variants={fadeInUp} className='flex gap-8 max-sm:flex-col'>
                <motion.div className='flex justify-center items-center'>
                    <motion.img className='w-full h-full object-cover' src={assets.user_image} alt="" />
                </motion.div>
                <motion.div variants={fadeInUp} className='flex flex-col gap-6'>
                    <p className=' text-sm max-sm:text-center whitespace-break-spaces'>
                        I am an experienced Web Developer with over a decade of professional  expertise in the field. Throughout my career, I have had the privilege of  collaborating with prestigious organizations, contributing to their success and growth.
                    </p>
                    <motion.div variants={parent1} viewport={{once:true}} initial = "hidden" whileInView="visible" className='flex gap-4 flex-wrap dark:text-black'>
                        <motion.div variants={fadeInUp} className='min-w-52  flex-1 flex flex-col gap-2   px-4 rounded-xl bg-white shadow-lg hover:shadow-fuchsia-500 duration-300 ease-in-out shadow-gray-400 py-2 w-60'>
                            <motion.img className='w-6' src={assets.code_icon} alt="" />
                            <h1>Languages</h1>
                            <p className='text-sm'>React.js html css Javascript Tailwand Cpp Node.js Express.js Mongodb</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className='min-w-52  flex-1 flex flex-col gap-2   px-4 rounded-xl bg-white shadow-lg hover:shadow-fuchsia-500 duration-300 ease-in-out shadow-gray-400 py-2 w-60'>
                            <motion.img className='w-6' src={assets.edu_icon} alt="" />
                            <h1>Education</h1>
                            <p className='text-sm'>Currently Doing Cs at air university Islamabad </p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className='min-w-52  flex-1 flex flex-col gap-2   px-4 rounded-xl bg-white shadow-lg hover:shadow-fuchsia-500 duration-300 ease-in-out shadow-gray-400 py-2 w-60'>
                            <motion.img className='w-6' src={assets.project_icon} alt="" />
                            <h1>Projects</h1>
                            <p className='text-sm'>Built more than 5 projects for clients</p>
                        </motion.div>
                    </motion.div>
                    <p className='max-sm:self-center text-secondary text-lg'>Tool I use</p>
                    <motion.div variants={parent1} viewport={{once:true}} initial = "hidden" whileInView="visible" className='flex gap-4 max-sm:justify-center max-sm:items-center flex-wrap'>
                        <motion.img variants={fadeInUp} className=' border-[1px] border-gray-400 w-12 h-12 rounded-xl' src={assets.figma} alt="" />
                        <motion.img variants={fadeInUp} className=' border-[1px] border-gray-400 w-12 h-12 p-2 rounded-xl' src={assets.firebase} alt="" />
                        <motion.img variants={fadeInUp} className=' border-[1px] border-gray-400 w-12 h-12  p-2 rounded-xl' src={assets.git} alt="" />
                        <motion.img variants={fadeInUp} className=' border-[1px] border-gray-400 w-12 h-12 p-2 rounded-xl' src={assets.mongodb} alt="" />
                        <motion.img variants={fadeInUp} className=' border-[1px] border-gray-400 w-12 h-12 p-2 rounded-xl' src={assets.vscode} alt="" />
                    </motion.div>
                </motion.div>
            </motion.div>
    </motion.div>

    </section>
   
  )
}

export default About