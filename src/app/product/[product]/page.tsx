"use client";

import { useState, useEffect } from "react";
import { useAppDispatch } from "@/app/redux/hooks";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { addItem } from "@/app/redux/CartSlice";
import StarRating from "@/components/starRating";

const SingleProduct = ({ params }: { params: { product: string } }) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size before adding to cart.");
      return;
    }
    dispatch(
      addItem({
        ...data,
        selectedColor,
        selectedSize,
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "products" && _id == "${params.product}"]{
          _id,
          name,
          description,
          price,
          discountPercent,
          image,
          colors,
          sizes
        }`;
        const [product] = await client.fetch(query);

        if (!product) {
          setError("Product not found.");
        } else {
          setData(product);
          
          setSelectedColor(product.colors?.[0] || null);
          setSelectedSize(product.sizes?.[0] || null);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("An error occurred while fetching the product.");
      }
    };

    fetchData();
  }, [params.product]);

  if (error) {
    return <div className="text-center">{error}</div>;
  }

  if (!data) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="md:grid grid-cols-2 gap-6 px-4 sm:px-8 md:px-12 lg:px-16 my-4 md:my-10">
      <div className="w-fit h-[550px] rounded-lg border-2 border-gray-300 overflow-hidden">
        <Image
          src={urlFor(data.image).url()}
          alt="shirt"
          width={500}
          height={500}
          priority
          className="h-full object-cover object-center text-center rounded-lg"
        />
      </div>
      <div>
        <div className="right-one py-8">
          <div className="mt-5 md:mt-0 space-y-3">
            <h1 className="font-[800] text-center md:text-left text-2xl md:text-3xl uppercase">
              {data.name}
            </h1>
            <div>
              <StarRating totalStars={5} />
            </div>
            <div className="flex gap-6 items-center">
              <p className="font-bold text-xl sm:text-2xl">$ {data.price}</p>
              <p className="font-semibold text-xl line-through text-gray-400">
                ${data.discountPercent}%
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm sm:text-base opacity-70 line-clamp-3">
            {data.description}
          </p>
        </div>
        <hr className="border-gray-200 border-b my-4" />

        <div className="flex items-start justify-between gap-4 mr-4">
          {/* Select Color */}
          <div>
            <p className="text-gray-700 mb-2">Select Color</p>
            <div className="space-x-4 flex">
              {data.colors.map((color: string, index: number) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select ${color}`}
                ></button>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-gray-700 mb-2">Select Size</p>
            <div className="flex gap-3">
              {data.sizes.map((size: string, index: number) => (
                <button
                  key={index}
                  className={`px-3 py-2 border rounded text-sm ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(size)}
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex item-center justify-center w-full mt-16">
          <button
            onClick={handleAddToCart}
            className="bg-black text-white w-[80%] h-12 rounded-md border-2 border-black hover:text-black hover:bg-gray-100 active:scale-90 duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
