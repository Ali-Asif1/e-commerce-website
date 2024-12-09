import React from 'react'
import Image from 'next/image'
import hero from '../../public/images/heroimg2.png'

export const Hero = () => {
  return (
    <div className=' mt-6'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 pt-6 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-4xl mb-2 font-bold text-black">FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
      <div className="flex justify-center ">
        <button className="inline-flex text-white bg-black rounded-full border-0 py-4 px-16 focus:outline-none text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
       <div className="object-cover object-center rounded"><Image src={hero} alt='hero' /></div>
    </div>
  </div>
</section>
    </div>
  )
}