import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

async function getData(){
  const query = (`*[_type == "products"]{
    _id,
    name,
    isNew,
    price,
    image,
  }`);

  const data = await client.fetch(query);

  return data;
}

async function allProducts() {
    const data =await getData()
    return (
      <>
        <section className="new-arrivals">
          
          <div className="px-4 pt-12 sm:pt-16 sm:px-8 lg:px-16">
            <h1 className="text-center mb-10 font-[800] text-[32px] sm:text-5xl uppercase ">
              All Product
            </h1>
            <div>
            
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 rounded overflow-hidden shadow-2xl">
                {data.map((val:any, i:number)=>(
                <div key={i} className=" bg-gray-100 rounded-lg">
                    <Link href={`/product/${val._id}`}>
                  <div className="rounded-lg w-full h-72 border-2 border-gray-200">
                    <Image
                      src={urlFor(val.image).url()}
                      alt="tshirt"
                      className="w-full h-full object-cover object rounded-lg hover:scale-105 duration-300"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold sm:text-xl">
                     {val.name}
                    </p>
                    <div className="space-y-1">
                     
                      <p className="font-bold text-xl"><span className="text-lg font-normal">Price:</span> ${val.price}</p>
                    </div>
                  </div>
                  </Link>
                </div>))}
  
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  export default allProducts
