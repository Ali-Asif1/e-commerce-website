// "use client";

// import { useAppDispatch } from "@/app/redux/hooks";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { addItem } from "@/app/redux/CartSlice";
// import StarRating from "@/components/starRating";
// import SizeDropdown from "@/components/sizes";

// const SingleProduct = async ({ params }: { params: { product: string } }) => {
//   const dispatch = useAppDispatch();

//   const handleAddToCart = (data?: any) => {
//     dispatch(addItem(data));
//   };

//   try {
//     const fetchdata = `*[_type == "products" && _id == "${params.product}"]{
//       _id,
//       name,
//       description,
//       price,
//       discountPercent,
//       image,
//       colors,
//       sizes
//     }`;

//     const [data] = await client.fetch(fetchdata);

//     if (!data) {
//       return <div className="text-center">Product not found.</div>;
//     }

//     return (
//       <div className="md:grid grid-cols-2 gap-6 px-4 sm:px-8 md:px-12 lg:px-16 my-4 md:my-10">
//         <div className="w-full rounded-xl border border-gray-200">
//           <Image
//             src={urlFor(data.image).url()}
//             alt="shirt"
//             width={500}
//             height={500}
//             priority
//             className="object-cover text-center"
//           />
//         </div>
//         <div>
//           <div className="right-one pb-4">
//             <div className="mt-5 md:mt-0 space-y-3">
//               <h1 className="font-[800] text-center md:text-left text-2xl md:text-3xl uppercase">
//                 {data.name}
//               </h1>
//               <div>
//                 <StarRating totalStars={5} />
//               </div>
//               <div className="flex gap-4 items-center">
//                 <p className="font-bold text-xl sm:text-2xl">${data.price}</p>
//                 <p className="font-semibold text-xl sm:text-2xl line-through opacity-40">
//                   ${data.discountPercent}
//                 </p>
//               </div>
//             </div>
//             <p className="mt-5 text-sm sm:text-base opacity-70 line-clamp-3">
//               {data.description}
//             </p>
//           </div>
//           <hr className="border-gray-200 border-b my-4" />

//           <div className="flex items-start justify-between gap-4 mr-4">
//             <div>
//               <div className="mb-4">
//                 <p className="">Select Color</p>
//               </div>
//               <div className="space-x-4">
//                 <button className="w-10 h-10 rounded-full bg-red-600"></button>
//                 <button className="w-10 h-10 rounded-full bg-black"></button>
//                 <button className="w-10 h-10 rounded-full bg-blue-600"></button>
//               </div>
//             </div>
//             <SizeDropdown />
//           </div>
//           <div className="flex item-center justify-center w-full mt-16">
//             <button
//               onClick={() => handleAddToCart(data)}
//               className="bg-black text-white w-[80%] h-12 rounded-full border-2 border-black hover:text-black hover:bg-gray-100 active:scale-90 duration-300"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return (
//       <div className="text-center">
//         An error occurred while fetching the product.
//       </div>
//     );
//   }
// };

// export default SingleProduct;


"use client";

import { useState, useEffect } from "react";
import { useAppDispatch } from "@/app/redux/hooks";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { addItem } from "@/app/redux/CartSlice";
import StarRating from "@/components/starRating";
import SizeDropdown from "@/components/sizes";

const SingleProduct = ({ params }: { params: { product: string } }) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAddToCart = (data?: any) => {
    dispatch(addItem(data));
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
            <div>
              <StarRating totalStars={5} />
            </div>
            <div className="flex gap-4 items-center">
              <p className="font-bold text-xl sm:text-2xl">${data.price}</p>
              <p className="font-semibold text-xl sm:text-2xl line-through opacity-40">
                ${data.discountPercent}
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm sm:text-base opacity-70 line-clamp-3">
            {data.description}
          </p>
        </div>
        <hr className="border-gray-200 border-b my-4" />

        <div className="flex items-start justify-between gap-4 mr-4">
          <div>
            <div className="mb-4">
              <p className="">Select Color</p>
            </div>
            <div className="space-x-4">
              <button className="w-10 h-10 rounded-full bg-red-600"></button>
              <button className="w-10 h-10 rounded-full bg-black"></button>
              <button className="w-10 h-10 rounded-full bg-blue-600"></button>
            </div>
          </div>
          <SizeDropdown />
        </div>
        <div className="flex item-center justify-center w-full mt-16">
          <button
            onClick={() => handleAddToCart(data)}
            className="bg-black text-white w-[80%] h-12 rounded-full border-2 border-black hover:text-black hover:bg-gray-100 active:scale-90 duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
