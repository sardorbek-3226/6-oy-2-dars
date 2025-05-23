import React from 'react'
import WomanImg from '../assets/woman.png'
import ShadowImg from '../assets/shadow.png'
const Woman = () => {
  return (
    <div className='relative '>
      <div>
        <img src={ShadowImg} className='absolute' alt="foto" />
        <img src={WomanImg} alt="foto" className='w-full h-full top-0' />
      </div>
      <div className='container absolute top-0 text-white text-2xl text-center pt-20 max-[500px]:pt-3'>
        <h1 className='italic max-md:text-xl'>“I can now create a lesson in minutes, instead of days or weeks”</h1>
        <p className='text-white/70 max-md:text-[15px]'>L. Springer, Course creator</p>
      </div>
    </div>
  )
}

export default Woman
