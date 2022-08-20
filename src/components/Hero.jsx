import React, { useState } from 'react'
import { introIllustration  , bgCurveyDesktop ,bgCurveyMobile} from '../images'

const Hero = () => {

  return (
    <section className=' relative bg-dimWhite w-[100vw]  pb-[150px]'>
      <img src={bgCurveyDesktop} className='sm:flex hidden absolute bottom-0 w-[100vw]'/>
      <img src={bgCurveyMobile} className='sm:hidden flex absolute bottom-0 w-[100vw] h-[50%] object-cover'/>
      <div className='flex flex-col items-center relative z-10 xs:px-0 px-5'>
        <img src={introIllustration} alt='introIllustration' className='ss:max-w-[500px] w-[80%] object-contain' />
        <h1 className='ss:text-[28px] text-[20px] font-[700] font-raleway  text-white py-5 max-w-[500px]'>
          All you files in one secure location,
          accessible anywhere
        </h1>
        <p className='text-white py-3 ss:text-[16px] text-[12px] font-[400] font-opensans ss:max-w-[450px] w-[80%]'>Fylo stores all your most important files in one secure location.
          Acces them wherever you need, share and collaborate with
          friends family, and co-workers.
        </p>
        <button className='font-raleway font-[400] bg-gradient text-white  my-3 py-3 px-20 rounded-full'>Get started</button>
      </div>
    </section>
  )
}

export default Hero