import React from 'react'
import Cycle from '../assets/sycle.png'
const User = () => {
  return (
    <div  className='bg-[#121118] pt-15 '>
        <div className='container'>
        <div className=' text-center'>
                <span className='text-[#8BFFB0] text-[15px]'>Async group courses</span>
                <h1 className='text-white text-[59px] max-[685px]:text-3xl'>Offer a group learning experience, but stay flexible.</h1>
            <p className='text-white/30'>Set starting dates, accept batches of students and watch them go through the course. Provide feedback on your own time, via text or video.</p>
        </div>
        <div>
          <img className='flex items-center justify-center mt-15 w-[1000px] max-lg:w-[600px]' src={Cycle} alt="foto" />
        </div>
        <div className='flex items-center justify-center max-md:text-xl '>
        <div className='bg-[#1D1B24] shadow-[#121118] max-md:w-[400px]  shadow-2xl max-w-[600px] text-center rounded-2xl pt-8 px-9'>
        <h1 className='text-white text-5xl max-[740px]-tex-[30px] max-[395px]:text-xl'>What will you teach?</h1>
        <p className='text-white/30 py-5 text-2xl max-[395px]:text-[15px]'>Pick a course template and start today - people will love it!</p>
        <button className="btn-primary pe-10 ml-[29%] max-md:pe-5 max-md:ml-[15%]">
          <span>Create a course</span>
          <i className="fa fa-arrow-right"></i>
        </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default User
