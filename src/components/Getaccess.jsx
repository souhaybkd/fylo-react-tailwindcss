import React from 'react'

const Getaccess = () => {
  return (
    <section className='bg-primary flex flex-col justify-center items-center pt-[100px] text-white w-[100vw]'>
      <div className='sm:w-[800px] w-[90%] bg-dimWhite py-10  rounded-lg'>
        <h3 className='font-[700] text-[26px] font-raleway'>Get early access today</h3>
        <p className='font-[400] font-opensans text-[14px] py-5 sm:px-20 px-5'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have ant questions, our support team would be happy to help you.</p>
        <form>
          <input type='text' placeholder='email@example.com' className='py-3 px-6 rounded-full sm:w-[50%] w-[80%] sm:mr-4 mr-0'></input>
          <button className='font-raleway bg-gradient font-semibold py-3 px-8 rounded-full sm:ml-4 ml-0 sm:w-auto  w-[80%] sm:mt-0 mt-5 '>Get Started For Free</button>
        </form>
      </div>
    </section>
  )
}

export default Getaccess