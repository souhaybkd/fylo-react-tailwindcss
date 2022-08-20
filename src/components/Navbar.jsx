import React from 'react'
import {logo} from '../images'

const Navbar = () => {
  return (
    <nav className='bg-dimWhite w-[100vw] flex justify-between items-center py-4 xs:px-10 px-6'>
      <img src={logo} className='w-[100px] h-[60px] object-contain'/>
      <ul className='text-white font-raleway flex justify-between items-center'>
        <li className='mr-6 cursor-pointer'><a href='#'>Features</a></li>
        <li className='mr-6 cursor-pointer'><a href='#'>Team</a></li>
        <li className='mr-4 cursor-pointer'><a href='#'>Sign In</a></li>
      </ul>
    </nav>
  )
}

export default Navbar