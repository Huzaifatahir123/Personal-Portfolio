import React, { useState } from 'react'

import {motion} from "framer-motion"
import { parent,parent1, fadeInUp } from '../animations/navanimation'
import toast from 'react-hot-toast';
const ContactUs = () => {
        const [submit , setsubmit] = useState("Submit");
      const [result, setResult] = React.useState("Submit");

  const onSubmit = async (event) => {
    try{   event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "68d98f9b-7b0d-4548-8981-337cecc09939");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message Sent Successfully 😎✔");
      event.target.reset();
      setResult("Submit")
    } else {
      toast.error("Error try again");
     
    }}catch(err){
      toast.error("error");
      setResult("Submit")
    }
 
  };
  return (
    <section id='contactus'>
  <div className='dark:bg-dark dark:text-white flex flex-col gap-4 justify-center items-center'>
            
            <h1 className='text-3xl text-secondary font-bold'>Get in touch</h1>
            <p className='text-sm text-secondary text-center'>I'd love to hear from you! If you have any questions, comments or <br />
feedback, please use the form below.</p>
          </div>




    <motion.div  className='sm:px-12 dark:bg-dark dark:text-white px-4 lg:px-24 xl:px-40 py-10 '>
      <motion.div className='flex  bg-gray-200 rounded-3xl'>
        <motion.form onSubmit={onSubmit} variants={parent1} viewport={{once:true,amount:0.3}} initial = "hidden" whileInView="visible" className='flex flex-2 px-6 py-20 flex-col dark:text-black gap-8 '>
         
            <motion.input variants={fadeInUp} type="text" className='p-4 outline-0 border-1  rounded-lg' placeholder='Name' name='name' />
            <motion.input variants={fadeInUp} type="text" className='p-4 outline-0 border-1 rounded-lg' placeholder='Email' name='email' />
            
            <motion.textarea variants={fadeInUp} name="message" id="" placeholder='Type your message' className=' p-4 outline-none border-1 rounded-lg'></motion.textarea>
              <motion.button 
               type='submit' variants={fadeInUp}
 className='px-2 py-4 hover:scale-105 ease-in-out duration-300 cursor-pointer bg-black text-text  sm:text-sm lg:text-lg rounded-xl border-1 border-secondary'>
         {result}
         </motion.button>
        </motion.form>
      
    </motion.div>

    </motion.div>
 
    </section>
  
  )
}

export default ContactUs