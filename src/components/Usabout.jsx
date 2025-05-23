import React from 'react'
import Get from '../assets/get.png'
import Guy from '../assets/guy.png'
const Usabout = () => {
  return (
    <div className='bg-[#121119] flex items-center justify-between '>
      <div className='container flex items-center my-5'>
        <div>
            <img src={Guy} alt="get" />
        </div>
        <div className='bg-[#8CEAAA] max-w-[370px] aspect-square text-white max-[1160px]:hidden'>
           <div className='py-10 px-15'>
           <p className='text-[15px] mb-2 text-white/40'>4-WEEK course ■ Starting SEPTEMBER '21</p>
           <h1 className='text-4xl mb-5'>Learn How to Airbrush</h1> 
           <p className='text-white/80'>Gain confident control of the airbrush to create simple artworks and lettering. You'll also get an understanding of how to set up, clean, and maintain your airbrushes.</p>
           </div>
           <div className='text-3xl flex justify-end pb-2 pr-5'>
            <h1 className='gap-9 flex items-center'>Pre-signup <i className='fa fa-arrow-right'></i></h1>
           </div>
        </div>
      </div>
      <div className='container flex items-center '>
        <div>
            <img src={Get} alt="get" />
        </div>
        <div className='bg-[#8CEAAA] max-w-[370px] aspect-square text-white max-[1160px]:hidden'>
           <div className='py-10 px-15'>
           <p className='text-[15px] mb-2 text-white/40'>4-WEEK course ■ Starting SEPTEMBER '21</p>
           <h1 className='text-4xl mb-5'>Going Wild with Graffiti Letters</h1> 
           <p className='text-white/80'>Style writing is so much fun. I'll teach you the tools from my 20 years of practicing with letters.
           Learn how to create new solutions, new letters, get more creative, and how to clean up the style to get rid of all the useless nonsense.</p>
           </div>
           <div className='text-3xl flex justify-end pb-2 pr-5'>
            <h1 className='gap-9 flex items-center'>Pre-signup <i className='fa fa-arrow-right'></i></h1>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Usabout
