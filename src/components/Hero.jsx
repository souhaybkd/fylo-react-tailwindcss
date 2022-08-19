import React from 'react'
import { introIllustration } from '../images'

const Hero = () => {
  return (
    <section className='flex flex-col items-center  bg-primary w-[100vw] xs:px-0 px-5'>
      <img src={introIllustration} alt='introIllustration' className='ss:max-w-[500px] w-[80%] object-contain' />
      <h1 className='ss:text-[28px] text-[20px] font-[700] font-opensans  text-white py-5 max-w-[500px]'>
        All you files in one secure location,
        accessible anywhere
      </h1>
      <p className='text-white py-3 ss:text-[16px] text-[12px] font-[400] font-opensans ss:max-w-[450px] w-[80%]'>Fylo stores all your most important files in one secure location.
        Acces them wherever you need, share and collaborate with
        friends family, and co-workers.
      </p>
      <button className='font-raleway bg-gradient text-white font-semibold my-3 py-3 px-20 rounded-full'>Get started</button>
    </section>
  )
}

export default Hero