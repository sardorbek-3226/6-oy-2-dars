import React from 'react'
import Gradien from '../assets/gradient.png'
import Limon from '../assets/limon.png'
const Rich = () => {
  return (
    <div className='bg-[#121118] pt-10 pb-12 '>
      <div className='container flex items-center gap-[150px] max-sm:gap-10 max-sm:flex-col '>
      <div className='relative z-10'>
        <img className='w-[500px] absolute top-0 z-1  md:w-[250px] left-0' src={Gradien} alt="./" />
        <img className=' top-0 max-md:w-[200px] max-sm:w-[100px] ' src={Limon} alt="./" />
      </div> 
      <div className='text-xl '>
        <h1 className='text-white text-6xl max-lg:text-4xl font-[400] max-w-[450px] mb-5'>Enrich them with text and images</h1>
        <p className='text-[#6a6c6e] max-w-[480px]'>Sometimes  speaking to the camera isn’t enough. So add text and graphics to get your point across. <span className='text-white'>Like slides, but easy peasy.</span></p>
      </div>
      
      </div>
    </div>
  )
}

export default Rich
