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
        <div className='w-full h-[100px] bg-black flex justify-around gap-2 flex-wrap'>
            <Image src={versace} alt='versace'/>
            <div className='flex items-center'><Image src={zara} alt='versace' width={150} height={1} className='h-8 flex'/></div>
            <Image src={gucci} alt='versace'/>
            <div className='flex items-center'><Image src={prada} alt='versace' width={150} height={1} className='h-8 flex'/></div>
            <Image src={calvin} alt='versace'/>
        </div>
    </div>
  )
}
