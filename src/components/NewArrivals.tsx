"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Pagination from "@/components/Pagination";

interface Product {
  _id: string;
  name: string;
  price: number;
  discountPercent: number;
  image: string;
}

const ITEMS_PER_PAGE = 4;

const NewArrivals = () => {
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "products" && isNew]{
          _id,
          isNew,
          name,
          discountPercent,
          price,
          image
        }`;

        const result = await client.fetch(query);
        setData(result);
      } catch (err) {
        console.error("Error fetching new arrivals:", err);
        setError("Failed to load new arrivals. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (loading) {
    return <div className="text-center">Loading new arrivals...</div>;
  }

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const Products = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <section className="all products">
      <div className="px-4 pt-12 sm:pt-16 sm:px-8 lg:px-16">
        <h1 className="text-2xl sm:text-4xl text-center font-bold uppercase mb-6">
          New Arrivals
        </h1>
        <div>
          <div className="grid justify-between px-4 lg:px-0 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3 rounded overflow-hidden">
            {Products.map((val: Product) => (
              <div
                key={val._id}
                className=" bg-gray-100 rounded-lg border-2 border-gray-400 p-2 overflow-hidden shadow-xl "
              >
                <Link href={`/product/${val._id}`}>
                  <div className="rounded-lg w-full mb-5 drop-shadow-md relative">
                    <Image
                      src={urlFor(val.image).url()}
                      alt={val.name}
                      className="aspect-square object-cover rounded-lg hover:scale-105 duration-300"
                      width={500}
                      height={500}
                      priority
                    />
                    <span className="absolute top-0 bg-red-500 text-white rounded px-2 py-1">
                      New
                    </span>
                  </div>
                  <div className="w-full min-h-16">
                    <p className="font-semibold text-lg">{val.name}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-gray-700 text-lg">${val.price}</p>
                    <p className="w-12 h-6 text-sm content-center text-red-500 text-center bg-gray-400 border rounded line-through">
                      {val.discountPercent}%
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Component */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default NewArrivals;
