import React from 'react'
import Image from 'next/image'
import dress1 from '../../public/images/dress1.png'
import dress2 from '../../public/images/dress2.png'
import dress3 from '../../public/images/dress3.png'
import dress4 from '../../public/images/dress4.png'

export const DressStyle = () => {
  return (
    <div className='mt-12 mb-14'><h1 className='text-center my-8 font-bold text-4xl'>BROWSE BY DRESS STYLE</h1>
        <div className='container grid grid-cols-1 my-1 md:grid-cols-3 mx-auto gap-4'>
            <div className='hidden md:block'><Image src={dress1} alt='dress1'/></div>
            <div className='md:col-span-2'><Image src={dress2} alt='dress2'/></div>
            <div className='md:col-span-2 md:block'><Image src={dress3} alt='dress3'/></div>
            <div className='hidden md:block'><Image src={dress4} alt='dress4'/></div>
        </div>
    </div>
  )
}
