import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import menubar from '../../public/images/menubar.svg'
import search from '../../public/images/search.svg'
import cart from '../../public/images/cart.svg'
import signup from '../../public/images/signup.svg'
import downarrow from '../../public/images/downarrow.svg'
import Link from 'next/link'

export const Header2 = () => {
  return (
    // <div className='h-[41px] flex px-10 lg:px-14 mt-4 mb-4 justify-between items-center'>
    //     <div className='flex gap-4'>
    //         <div className='flex gap-4'>
    //             <Image src={menubar} alt='logo' className='lg:hidden' />
    //             <Image src={logo} alt='logo' />
    //         </div>

    //         <div className='hidden lg:flex gap-6'>
    //         <div className='flex'><p>Shop</p> <Image src={downarrow} alt='logo' /></div>
    //         <div><p>On Sale</p></div>
    //         <div><p>New Arrivals</p></div>
    //         <div><p>Brands</p></div>
    //         </div>
    //     </div>

    //     <div className='flex gap-4'>
    //         <div className='flex gap-4  lg:bg-gray-200 lg:w-[300px] lg:py-1 lg:px-4'>
    //             <Image src={search} alt='logo' className='hidden lg:block' />
    //             <p className='rounded hidden lg:block'>Search for products...</p>
    //         </div>
    //         <Image src={search} alt='logo' className='lg:hidden' />
    //         <Image src={cart} alt='logo' />
    //         <Image src={signup} alt='logo' />
    //     </div>
    // </div>

    <div className='header-box'>
       <div className='menu'>
          <div><Image src={menubar} alt='logo' id='show' /></div>
          <div className='header-logo'><Image src={logo} alt='logo'/></div>
        </div>
        <div id='hide'>
          <div className='header-links'>
            <div className='arrow'><Link href='/shop'>Shop</Link> <Image src={downarrow} alt='downarrow'/></div>
            <Link href='/sale'>On Sale</Link>
            <Link href='/newarrivals'>New Arrivals</Link>
            <Link href='/brands'>Brands</Link>
          </div>
        </div>

        <div id='hide'>
          <div className='search-box'>
            <Image src={search} alt='search' className='search' />
            <input type="text" placeholder='Search for products...' className='input' />
          </div>
        </div>

        <div className='header-icons'>
            <Image src={cart} alt='cart'/>
            <Image src={signup} alt='signup'/>
        </div>
    </div>
  )
}
