import React from 'react'
import Image from 'next/image'
import versace from '../../public/images/versace.svg'
import zara from '../../public/images/zara.svg'
import gucci from '../../public/images/gucci.svg'
import prada from '../../public/images/prada.svg'
import calvin from '../../public/images/calvin.svg'

export const Tags = () => {
  return (
    <div>
        <div className='w-full h-[100px] bg-black flex justify-around gap-2 flex-wrap'>
            <Image src={versace} alt='versace'/>
            <Image src={zara} alt='versace'/>
            <Image src={gucci} alt='versace'/>
            <Image src={prada} alt='versace'/>
            <Image src={calvin} alt='versace'/>
        </div>
    </div>
  )
}
