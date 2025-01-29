import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  discountPercent: number;
  image: string;
}

async function getData() {
  const query = `*[_type == "products"]{
    _id,
    name,
    price,
    image,
    discountPercent
  }`;

  const data = await client.fetch(query);

  return data;
}

async function allProducts() {
  const data = await getData();
  return (
    <>
      <section className="all products">
        <div className="px-4 pt-12 sm:pt-16 sm:px-8 lg:px-16">
          <h1 className="text-center mb-10 font-[800] text-[32px] sm:text-5xl uppercase ">
            All Product
          </h1>
          <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 rounded overflow-hidden">
              {data.map((val: Product, i: number) => (
                <div
                  key={i}
                  className=" bg-gray-100 rounded-lg border-2 border-gray-300 p-2 shadow-xl"
                >
                  <Link href={`/product/${val._id}`}>
                    <div className="rounded-lg w-full h-72 mb-3 drop-shadow">
                      <Image
                        src={urlFor(val.image).url()}
                        alt="product-image"
                        className="w-full h-full object-cover object rounded-lg hover:scale-105 duration-300"
                        width={500}
                        height={500}
                      />
                    </div>

                    <div className="w-full min-h-16">
                      <p className="font-semibold text-lg">
                        {val.name}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-gray-700">${val.price}</p>
                      <p className="w-12 h-6 text-sm text-white text-center bg-gray-400 border rounded">
                        -{val.discountPercent}%
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default allProducts;
