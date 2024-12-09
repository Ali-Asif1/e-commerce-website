import React from 'react'
import Image from 'next/image'
import shirt from '../../public/images/sellingshirt.png'
import tshirt from '../../public/images/shellingtshirt.png'
import short from '../../public/images/short.png'
import jeans from '../../public/images/sellingjeans.png'
import star1 from '../../public/images/shirtstar.svg'
import star2 from '../../public/images/tshirtstar.svg'
import star3 from '../../public/images/shortstar.svg'
import star4 from '../../public/images/jeansstar.svg'

export const TopSelling = () => {
  return (
    <>
    <div><h1 className='text-center my-8 font-bold text-4xl'>TOP SELLING</h1>
        <div className='container grid grid-cols-2 md:grid-cols-4 mx-auto'>
        <div className=''><Image src={shirt} alt='tshirt'/>
         <p className='text-lg font-bold ml-2'>Vertical Striped Shirt</p>
         <div className='ml-2'><Image src={star1} alt='stars' />
         <p className='font-bold text-lg'>$212 <span className='font-bold text-lg opacity-50 line-through'>$232</span></p>
        </div>
      </div>
      <div><Image src={tshirt} alt='jeans'/>
        <p className='text-lg font-bold ml-2'>Courage Graphic T-shirt</p>
         <div className='ml-2'><Image src={star2} alt='stars' />
         <p className='font-bold text-lg'>$145</p>
        </div>
      </div>

      <div className='hidden md:block'><Image src={short} alt='shirt'/>
        <p className='text-lg font-bold'>Loose Fit Bermuda Shorts</p>
        <div><Image src={star3} alt='stars' />
        <p className='font-bold text-lg'>$80</p>
        </div>
      </div>

      <div className='hidden md:block'><Image src={jeans} alt='tshirt2'/>
        <p className='text-lg font-bold'>Faded Skinny Jeans</p>
        <div><Image src={star4} alt='stars' />
        <p className='font-bold text-lg'>$210</p>
        </div>
      </div>
      </div>
    </div>
    <div className="flex justify-center ">
    <button className="inline-flex text-black bg-gray-200 my-3 rounded border-0 py-3 px-12 focus:outline-none text-lg">View All</button>
</div>
</>
  )
}
