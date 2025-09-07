import React from 'react'
import assets from '../assets/assets'

const Work = () => {
  return (
    <section id='projects'>
       <div className='flex px-4 dark:bg-dark dark:text-white flex-col gap-12 sm:px-12 lg:px-24 xl:px-40 py-20'>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <p className='text-lg'>My portfolio</p>
            <h1 className='text-3xl text-secondary font-bold'>My Latest Work</h1>
            <p className='text-sm text-secondary text-center'>Welcome to my web development portfolio!  Explore a collection of projects showcasing <br />
my expertise in front-end development.</p>
          </div>
          

          <div className='flex gap-4 flex-wrap'>
            <div className='flex flex-col gap-4 min-w-[220px] dark:text-black flex-1 bg-white rounded-lg shadow-lg hover:shadow-fuchsia-500 duration-300 px-6 py-2 ease-in-out shadow-gray-400'>
                <img className='w-56' src={assets.bannerpositivus} alt="" />
                <h1 className='text-3xl  p-1'>Positivus Landing Page</h1>
                <a className='text-2xl  hover:text-red-500  text-green-600 flex gap-1 font-bold' target="_blank" href="https://positivusweb321.netlify.app/">Visit </a>
            </div>
            <div className='flex flex-col gap-4 min-w-[220px] flex-1 dark:text-black bg-white rounded-lg shadow-lg  hover:shadow-fuchsia-500 duration-300 px-6 py-2 ease-in-out shadow-gray-400'>
                <img className='w-56' src={assets.ayanwb} alt="" />
                <h1 className='text-3xl  p-1'>Personal Portfolio For Client</h1>
                <a className=' text-2xl hover:text-red-500  text-yellow-600 flex gap-1 font-bold' target="_blank" href="https://ecommercewebsiteayan.netlify.app/">Visit </a>
            </div>
            <div className='flex flex-col gap-4 min-w-[220px] flex-1 dark:text-black bg-white rounded-lg shadow-lg hover:shadow-fuchsia-500 duration-300 px-6 py-2 ease-in-out shadow-gray-400'>
                <img className='object-contain' src={assets.heroimggt} alt="" />
                <h1 className='text-3xl  p-1'>Agency Ai Landing page</h1>
                <a className='text-2xl hover:text-red-500 text-blue-800 flex gap-1 font-bold' target="_blank" href="https://responsiveaiproject.netlify.app/">Visit </a>
            </div>
          </div>
          </div>
    </section>
   
  )
}

export default Work