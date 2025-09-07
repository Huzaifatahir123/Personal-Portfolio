import React from 'react'
import assets from '../assets/assets'

const Service = () => {
  return (
    <section id='services'>
<div className='flex px-4 flex-col dark:bg-dark dark:text-white gap-12 sm:px-12 lg:px-24 xl:px-40 py-20'>
          <div className='flex flex-col gap-4 justify-center items-center'>
            <p className='text-lg'>What i offer</p>
            <h1 className='text-3xl text-secondary font-bold'>My Services</h1>
            <p className='text-sm text-secondary max-sm:text-center'>I am a Full Stack developer from Pakistan with 2 years of experience in multiple <br className='max-sm:hidden' />
companies</p>
          </div>
        
          <div className='flex gap-4 flex-wrap'>
        
            <div className='  max-sm:min-w-48 flex-1 flex dark:text-black flex-col px-8 py-4 hover:shadow-fuchsia-400 duration-300 ease-in-out rounded-xl bg-white shadow-xl shadow-gray-400 gap-4 '>
                <img className='w-12' src={assets.web_icon} alt="" />
                <h1 className='text-3xl font-bold'>Frontend </h1>
                <p>USing React And Tailwand Responsive layout for all devices </p>
                <p className='flex gap-2 text-lg text-secondary'> Read more <img className='object-contain ' src={assets.right_arrow_bold} alt="" /></p>
            </div>
            <div className='  max-sm:min-w-48  flex-1 flex flex-col dark:text-black px-8 py-4 hover:shadow-fuchsia-400 duration-300 ease-in-out rounded-xl bg-white shadow-xl shadow-gray-400 gap-4 '>
                <img className='w-12' src={assets.web_icon} alt="" />
                <h1 className='text-3xl font-bold'>Backend </h1>
                <p>USing Node and Express for DataBase Mongo Db </p>
                <p className='flex gap-2 text-lg text-secondary'> Read more <img className='object-contain' src={assets.right_arrow_bold} alt="" /></p>
            </div>
            <div className='  max-sm:min-w-48  flex-1 flex dark:text-black flex-col px-8 py-4 hover:shadow-fuchsia-400 duration-300 ease-in-out rounded-xl bg-white shadow-xl shadow-gray-400 gap-4 '>
                <img className='w-12' src={assets.web_icon} alt="" />
                <h1 className='text-3xl font-bold'>Full Stack </h1>
                <p>Mongodb React Node And Express Responsive and Optimize  </p>
                <p className='flex gap-2 text-lg text-secondary'> Read more <img className='object-contain' src={assets.right_arrow_bold} alt="" /></p>
            </div>

          </div>
    </div>
    </section>
    
  )
}

export default Service