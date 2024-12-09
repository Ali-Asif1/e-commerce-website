import React from 'react'
import Image from 'next/image'
import tshirt from '../../public/images/tshirt.png'
import shirt from '../../public/images/shirt.png'
import jeans from '../../public/images/jeans.png'
import tshirt2 from '../../public/images/tshirt2.png'
import stars from '../../public/images/stars.svg'
import dis1 from '../../public/images/discount1.svg'
import dis2 from '../../public/images/discount2.svg'


export const NewArrivals = () => {
  return (
    <>
    <h1 className='text-center my-10 font-bold text-4xl'>NEW ARRIVALS</h1>
    <div className='container grid grid-cols-2 md:grid-cols-4 mx-auto'>
      <div><Image src={tshirt} alt='tshirt'/>
         <p className='text-lg font-bold ml-2'>T-shirt with Tape Details</p>
         <div className='ml-2'><Image src={stars} alt='stars' />
         <p className='font-bold text-lg'>$120</p>
        </div>
      </div>
      <div><Image src={jeans} alt='jeans'/>
        <p className='text-lg font-bold ml-2'>Sinny Fit Jeans</p>
         <div className='ml-2'><Image src={stars} alt='stars' />
         <p className='font-bold w-[150px] pt-1'><Image src={dis1} alt='dis1'/></p>
        </div>
      </div>

      <div className='hidden md:block'><Image src={shirt} alt='shirt'/>
        <p className='text-lg font-bold'>Checked Shirt</p>
        <div><Image src={stars} alt='stars' />
        <p className='font-bold text-lg'>$180</p>
        </div>
      </div>

      <div className='hidden md:block'><Image src={tshirt2} alt='tshirt2'/>
        <p className='text-lg font-bold'>Sleeve Striped T-shirt</p>
        <div><Image src={stars} alt='stars' />
        <p className='font-bold w-[150px] pt-1'><Image src={dis2} alt='dis2'/></p>
        </div>
      </div>
    </div>
    <div className="flex justify-center ">
        <button className="inline-flex text-black bg-gray-200 my-3 rounded border-0 py-3 px-12 focus:outline-none text-lg">View All</button>
    </div>
  </>
  )
}

