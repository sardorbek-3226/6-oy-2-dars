import HeroDesktopImage from '../assets/hero-desktop.png'
import HeroPhoneImage from '../assets/hero-phone.png'

const Hero = () => {
  return (
    <div className="min-h-screen pb-20 bg-secondary">
      <div className="flex flex-col py-20 text-white items-center justify-center">
        <h1 className="text-[4rem] mb-5 max-md:text-[2rem] text-center">Take out your phone, and teach</h1>
        <p className="text-2xl opacity-70 mb-14 text-center">Classcamp is the easiest way to create an online course.</p>
        <button className="btn-primary pe-10">
          <span>Create a course</span>
          <i className="fa fa-arrow-right"></i>
        </button>
        <span className="text-sm inline-block mt-3">If you're a student, continue here</span>
      </div>
      <div className="mx-auto flex justify-center relative w-full max-w-4xl">
        <img className='w-full object-contain max-md:w-[500px] max-sm:w-[300px]' src={HeroDesktopImage} alt="hero desktop image" />
        <img className='absolute top-0 bottom-0 end-0 max-md:w-[200px] max-sm:w-[100px] max-sm:right-[150px] max-md:right-7 object-contain' src={HeroPhoneImage} alt="Phone " />
      </div>
    </div>
  )
}

export default Hero