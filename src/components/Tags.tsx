import React from 'react'
import Image from 'next/image'
import versace from '../../public/images/versace.svg'
import zara from '../../public/images/zara1.png'
import gucci from '../../public/images/gucci.svg'
import prada from '../../public/images/prada1.png'
import calvin from '../../public/images/calvin.svg'

export const Tags = () => {
  return (
    <div>
        <div className='px-4 sm:px-8 lg:px-16 h-[146px] lg:h-[122px] bg-black flex justify-around flex-wrap gap-2 sm:gap-4'>
            <Image src={versace} alt='versace' className='max-w-[116px] sm:max-w-[116px]'/>
            <div className='flex items-center'><Image src={zara} alt='versace' className='max-w-16 sm:max-w-[91px]'/></div>
            <Image src={gucci} alt='versace' className='max-w-[109px] sm:max-w-[156px]'/>
            <div className='flex items-center'><Image src={prada} alt='versace' className='max-w-[127px] sm:max-w-[194px]'/></div>
            <Image src={calvin} alt='versace' className='max-w-[134px] sm:max-w-[206px]'/>
        </div>
    </div>
  )
}
