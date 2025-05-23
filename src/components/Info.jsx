import React from 'react'
import videograf from '../assets/videograf.png'
import create from '../assets/create.png'
import get from '../assets/get.png'
const Info = () => {
  return (
  <div className='bg-black'>
      <div className='  container'>
      <div className=' text-white'>
        <h1 className='text-6xl text-center mb-12 max-lg:text-2xl max-md:text-xl max-sm:text-[25px]'>Trusted by the <br /> best at their craft</h1>
        <p className='text-xl text-center text-[#b9b7b7] max-lg:text-2xl max-md:text-xl max-sm:text-[15px]'>Coaches, creators and changemakers use <br /> Classcamp to offer engaging learning experiences</p>
      </div>
      <div className='flex justify-evenly gap-5 pb-5'>
        <div className='text-white relative pt-10'>
            <img  className='flex justify-center' src={videograf} alt="foto" />
            <div className='absolute top-[340px]    text-center'>
            <h1 className='text-3xl max-lg:text-2xl max-md:text-xl max-md:hidden max-sm:text-[15px]'>Videography <br /> for movement</h1>
            <p className='max-w-[250px]  max-lg:hidden'>Alessandro Sigismondi Photographer</p>
            </div>
        </div>
        <div className='text-white relative pt-10'>
            <img  className='flex justify-center  ' src={create} alt="foto" />
            <div className='absolute top-[340px]  max-md:text-hidden  text-center'>
            <h1 className='text-3xl max-lg:text-2xl max-md:text-xl max-md:hidden max-sm:text-[15px]'>Create the life <br /> and business <br /> you want</h1>
            <p className='max-w-[250px] max-lg:hidden'>Alessandro Sigismondi Photographer</p>
            </div>
        </div>
        <div className='text-white relative pt-10'>
            <img  className='flex justify-center' src={get} alt="foto" />
            <div className='absolute top-[340px]  max-md:text-hidden  text-center'>
            <h1 className='text-3xl max-lg:text-2xl max-md:text-xl  max-md:hidden max-sm:text-[15px]'>Get started with Graffiti</h1>
            <p className='max-w-[250px] max-lg:hidden'>Alessandro Sigismondi Photographer</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Info
