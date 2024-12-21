import React from 'react'
import Image from 'next/image'
import email from '../../public/images/email.png'

export const Update = () => {
  return (
    <section className='footer-part'>
      <div className='px-4 sm:px-8 md:px-12 lg:px-16 py-8 bg-gradient-to-b from-white from-50% to-gray-300 to-50% '>
        <div className='flex flex-col md:flex-row bg-black p-6 md:p-8 lg:py-9 lg:px-16 lg:gap-28 items-center gap-4 rounded-3xl'>
            <p className='text-white text-3xl text-left font-[900] sm:text-4xl'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
            <div className='flex flex-col items-center gap-4 w-full md:w-auto'>
                <button className='bg-gray-100 w-full md:w-[350px] px-5 py-3 lg:px-6 lg:py-4 rounded-full flex items-center pl-6 gap-2'><Image src={email} alt='email' /><input type=" text" placeholder='Enter your email' /></button>
                <button className='bg-gray-100 w-full md:w-[350px] px-5 py-3 lg:px-6 lg:py-4 rounded-full flex items-center justify-center pl-6 gap-2'><p className='font-semibold'>Subcribe to Newsletter</p></button>
            </div>
        </div>
      </div>
    </section>
  )
}
