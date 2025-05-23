import React from 'react'
import burchakimg from '../assets/burchak.png'
import heroimg from '../assets/hero-phone.png'
const About = () => {
  return (
    <div className='flex justify-between gap-0.5 bg-black items-center text-white px-20'>
      <div className='container mx-auto z-10 max-md:text-[15px]'>
        <h1 className='text-5xl max-w-[800px] max-md:text-2xl mb-10'>Shoot lessons <br /> with your phone</h1>
        <h4 className='text-xl max-w-[400px] space-y-4 text-[#909092] max-md:hidden'> Pick a course template, and let the app guide you through the shooting. It's as easy as that.</h4>
      </div>
      <div className='relative z-0 '>
        <img  className='absolute -z-1 top-0 right-20 max-sm:hidden max-w-none w-[450px] max-sm:w-[150px] max-lg:w-[400px] max-md:w-[300px]' src={burchakimg} alt="img" />
        <img className='z-20 mr-5 max-md:w-[100px]' src={heroimg} alt="img" />
      </div>
    </div>
  )
}

export default About
