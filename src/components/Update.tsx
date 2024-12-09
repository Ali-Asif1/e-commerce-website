import React from 'react'

export const Update = () => {
  return (
    <div className='container mx-auto mt-10'>
        <div className='grid md:grid-cols-2 bg-black gap-8 h-[240px] md:h-[180px] text-center justify-between items-center rounded-3xl'>
            <p className='text-white text-3xl mt-2 mb-2 md:text-[40px] font-bold'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
            <div className='flex flex-col items-center gap-4 mb-4'>
                <button className='bg-gray-100 h-12 w-[350px] md:w-[394px] rounded-3xl flex items-center pl-6 gap-2'><img src="/images/email.png" alt="" /><input type=" text" placeholder='Enter your email' /></button>
                <button className='bg-gray-100 h-12 w-[350px] md:w-[394px] rounded-3xl flex items-center justify-center pl-6 gap-2 '><p className='font-semibold'>Subcribe to Newsletter</p></button>
            </div>
        </div>
    </div>
  )
}
