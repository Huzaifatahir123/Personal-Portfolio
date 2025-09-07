import React from 'react'
import assets  from '../assets/assets'
const Hero = ({theme,settheme}) => {
  return (
    <div className='flex px-4 dark:text-text dark:bg-dark flex-col gap-4 justify-center items-center sm:px-12 lg:px-24 xl:px-40 py-20'>
      <img className='w-36' src={assets.profile_img} alt="" />
      <p className='text-lg'>Hi i am Huzaifa tahir</p>
      <h1 className='sm:text-4xl max-sm:text-center text-3xl  font-bold'> Web Developer Based In Pakistan</h1>
      <p className='text-center'>I am a FullStack Web Developer <br /> based in pakistan have a experience of 2+ years</p>
      <div className='flex gap-4'>
        <button className='px-6 py-4 border-1 rounded-xl   '>Connect With me </button>
        <button className='px-6 py-4 border-1 rounded-xl  flex  gap-2 justify-center items-center '>my resume <img className='w-6' src={assets.download_icon} alt="" /> </button>
      </div>
    </div>
  )
}

export default Hero