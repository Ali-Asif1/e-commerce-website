import React from 'react'
import Image from 'next/image'
import dress1 from '../../public/images/dress1.png'
import dress2 from '../../public/images/dress2.png'
import dress3 from '../../public/images/dress3.png'
import dress4 from '../../public/images/dress4.png'

export const DressStyle = () => {
  return (
    <section className='dress-style'>
      <div className='px-4 sm:px-8 lg:px-16 bg-red-300 pt-16'>
       <div className='bg-gray-200 rounded-3xl px-6 py-8 '>
         <h1 className='text-center mb-10 md:mb-16 font-[900] text-2xl sm:text-3xl md:text-4xl'>BROWSE BY DRESS STYLE</h1>
         <div className='grid md:grid-cols-3 gap-5'>
             <div className='h-[190px] md:h-full overflow-hidden rounded-2xl'><Image src={dress1} alt='dress1' className='w-full h-full'/></div>
             <div className='h-[190px] md:h-full md:col-span-2 rounded-2xl'><Image src={dress2} alt='dress2' className='w-full h-full'/></div>
             <div className='h-[190px] md:h-full md:col-span-2 md:w-full rounded-2xl'><Image src={dress3} alt='dress3' className='w-full h-full'/></div>
             <div className='h-[190px] md:h-full overflow-hidden rounded-2xl'><Image src={dress4} alt='dress4' className='w-full h-full'/></div>
         </div>
        </div>
      </div>
    </section>

    // <div className='mt-12 mb-14'><h1 className='text-center my-8 font-bold text-4xl'>BROWSE BY DRESS STYLE</h1>
    //     <div className='container grid grid-cols-1 my-1 md:grid-cols-3 mx-auto gap-4 bg-red-300'>
    //         <div className='hidden md:block'><Image src={dress1} alt='dress1'/></div>
    //         <div className='md:col-span-2'><Image src={dress2} alt='dress2'/></div>
    //         <div className='md:col-span-2 md:block'><Image src={dress3} alt='dress3'/></div>
    //         <div className='hidden md:block'><Image src={dress4} alt='dress4'/></div>
    //     </div>
    // </div>
  )
}
