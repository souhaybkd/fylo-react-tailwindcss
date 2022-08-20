import React from 'react'
import {stayProductiveIllustration ,iconArrow} from '../images'
const Howwork = () => {
  return (
    <section className='bg-primary w-[100vw] flex justify-center items-centre sm:flex-row flex-col px-5 pt-4'>
      <img src={stayProductiveIllustration} alt='stay productive' className='ss:w-[600px] ss:h-[600px] w-[90%] sm:mx-0 mx-auto object-contain sm:pr-8'/>
      <div className='flex  flex-col text-left justify-center ss:pl-8	ss:pt-0 pt-10'>
        <h2 className='text-white font-[700] font-raleway xs:text-[42px] text-[20px] leading-14'>Stay productive, <br className='ss:block hidden'/>wherever you are </h2>
        <p className='text-white font-[400] font-opensans ss:text-[16px] text-[14px] py-4'>Never let location be an issue when accessing your files. Fylo has you<br/>covered for all of you file storage needs.</p>
        <p className='text-white font-[400] font-opensans ss:text-[16px] text-[14px]'>Securely share files and folders with friends, family and colleagues for live<br/>collaboration. No email attachments required.</p>
        <a href='#' className='text-cyan font-[400] cursor-pointer py-5 flex flex-row items-center after:content-[" "] after:w-[160px] after:h-[1px] after:bg-cyan after:absolute after:mt-[32px]'>
          <p className='pr-2'>See hoe fylo works</p>
          <img src={iconArrow}/>
        </a>
      </div>
    </section>
  )
}

export default Howwork