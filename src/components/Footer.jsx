import React from 'react'
import Social from './Social'
import { logo ,iconEmail , iconPhone , iconLocation ,} from '../images'

const Footer = () => {
  return (
    <footer className='bg-secondary w-[100vw] pt-[200px] pb-[150px] md:px-[100px] px-[10%] mt-[-100px]'>
      <img src={logo} alt='logo'/>
      <div className='flex md:flex-row flex-col justify-evenly  text-white pt-10'>
        <div className='flex w-[300px] items-start'>
          <img src={iconLocation} alt='location'/>
          <p className='font-[400] text-[12px] text-left pl-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur adipisci vero neque ducimus iure perspiciatis repellendus qui!</p>
        </div>
        <div className='md:py-0 py-8'>
          <div className='flex items-center'>
            <img src={iconPhone} className='w-[15px] h-[15px] object-contain'/>
            <p className='pl-6'>+1-543-123-4567</p>
          </div>
          <div className='flex items-center'>
            <img src={iconEmail} className='w-[15px] h-[15px] object-contain'/>
            <p className='pl-6'>example@fylo.com</p>
          </div>
        </div>
        <ul className='text-left'>
          <li className='pb-3'><a>About Us</a></li>
          <li className='pb-3'><a>Jobs</a></li>
          <li className='pb-3'><a>Press</a></li>
          <li className='pb-3'><a>Blog</a></li>
        </ul>
        <ul className='text-left md:py-0 py-10'>
          <li className='pb-3'><a>Contact Us</a></li>
          <li className='pb-3'><a>Terms</a></li>
          <li className='pb-3'><a>Privacy</a></li>
        </ul>
        <div className='flex justify-center md:items-start items-center '>
          <Social />
        </div>

      </div>
    </footer>
  )
}

export default Footer