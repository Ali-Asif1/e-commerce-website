'use client'

import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/CartSlice';

const SingleProduct = async ({ params }: { params: { product: string } }) => {
  const dispatch = useDispatch();
  const product = {
  
    name: 'data.name',
    price: 100,
  };
  try {
    // Update query to fetch by name instead of ID
    const fetchdata = `*[_type == "products" && _id == "${params.product}"]{
      _id,
      name,
      description,
      price,
      discountPercent,
      image,
      colors,
      sizes
    }`;

    // Fetch data
    const [data] = await client.fetch(fetchdata);

    // Handle case where no data is found
    if (!data) {
      return <div className="text-center">Product not found.</div>;
    }

    // Render product
    return (
      <div className="md:grid grid-cols-2 gap-6 px-4 sm:px-8 md:px-12 lg:px-16 mt-4 md:mt-10">
          <div className="w-full rounded-xl border border-gray-200">
            <Image
              src={urlFor(data.image).url()}
              alt="shirt"
              width={500}
              height={500}
              priority
              className="object-cover text-center"
            />
          </div>
          <div>
            <div className="right-one pb-4">
              <div className="mt-5 md:mt-0 space-y-3">
                <h1 className="font-[800] text-center md:text-left text-2xl md:text-3xl uppercase">
                 {data.name}
                </h1>
                <Image src={''} alt="shirt" />
                <div className="flex gap-4 items-center">
                  <p className="font-bold text-xl sm:text-2xl">${data.price}</p>
                  <p className="font-semibold text-xl sm:text-2xl line-through opacity-40">
                    ${data.discountPercent}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm sm:text-base">
                {data.description}
              </p>
            </div>
            <hr className="border-gray-200 border-b my-6" />

            <div className="right-one pb-4">
              <div className=''><p className="">{data.colors}</p></div>
              <div className="flex gap-4 mt-4">
                <button className="w-10 sm:w-[37] sm:h-[37] rounded-full bg-red-950 px-[14px] py-[7px]">
                </button>
                <button className="w-10 sm:w-[37] sm:h-[37] rounded-full bg-black px-[14px] py-[7px]">
                  .
                </button>
                <button className="w-10 sm:w-[37] sm:h-[37] rounded-full bg-blue-900 px-[14px] py-[7px]">
                </button>
              </div>
            </div>
            <hr className="border-gray-200 border-b mt-6" />

            <div className="right-one pb-4">
              <p className="text-base mt-6">Choose Size</p>
              <div className="flex justify-around mt-4">
                <button className="text-sm bg-gray-200 w-[76px] px-[14px] py-3 rounded-full">
                  Small
                </button>
                <button className="text-sm bg-gray-200 w-[76px] px-[14px] py-3 rounded-full">
                  Medium
                </button>
                <button className="text-sm bg-gray-200 w-[76px] px-[14px] py-3 rounded-full">
                  Large
                </button>
                <button className="text-sm bg-gray-200 w-[90px] px-[14px] py-3 rounded-full">
                  X-Large
                </button>
              </div>
            </div>
            <hr className="border-gray-200 border-b my-6" />

            <div className="flex gap-4 ">
              <button className="basis-1/4 bg-gray-200 rounded-full flex justify-around items-center">
                <span className="font-bold text-2xl">-</span>
                <p className="text-[10px]">1</p>
                <span className="font-bold text-2xl">+</span>
              </button>
              <button onClick={() => dispatch(addItem(data.name))} className="bg-black text-white basis-9/12 rounded-full px-4 py-3 border-2 border-black hover:text-black hover:bg-gray-100 active:scale-90 duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
    );
  } catch (error) {
    console.error('Error fetching product:', error);
    return <div className="text-center">An error occurred while fetching the product.</div>;
  }
};

export default SingleProduct;



