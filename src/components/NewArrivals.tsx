// import Image from "next/image";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// async function getData(){
//   const query = (`*[_type == "products" && isNew == true]{
//     _id,
//     name,
//     isNew,
//     price,
//     image,
//   }[0..3]`);

//   const data = await client.fetch(query);

//   return data;
// };

//  async function NewArrivals() {
//  const data = await getData()
//   return (
//     <>
//       <section className="new-arrivals">

//         <div className="px-4 pt-12 sm:pt-16 sm:px-8 lg:px-16">
//           <h1 className="text-center mb-10 font-[900] text-[32px] sm:text-5xl ">
//             NEW ARRIVALS
//           </h1>
//           <div>

//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//               {data.map((val:any, i:number)=>(
//               <div key={val._id} className=" bg-gray-100 rounded-lg">
//                 <div className="rounded-lg w-full border-2 border-gray-200">
//                   <Image
//                     src={urlFor(val.image).url()}
//                     alt="tshirt"
//                     className="w-full h-64 object-cover"
//                     width={500}
//                     height={500}
//                     priority
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <Link href={`/product/${val._id}`}><p className="text-lg font-semibold sm:text-xl">
//                    {val.name}
//                   </p></Link>
//                   <div className="space-y-1">
//                     <p>{val._id}</p>

//                     <p className="font-bold text-xl"><span className="text-lg font-normal">Price:</span> ${val.price}</p>
//                   </div>
//                 </div>
//               </div>))}

//             </div>
//           </div>
//           <Link href={'/shop'}><div className="flex justify-center mt-8"><button className="w-full sm:w-[230px] sm:object-center text-center py-3 px-12 text-lg bg-white text-black border-2 border-gray-300 rounded-full hover:bg-black hover:text-white cursor-pointer hover:border-black transition ease-linear duration-300 active:scale-95">
//             Shop Now</button></div>
//           <hr className="w-full border-gray-200 mt-[40px] sm:mt-16"/></Link>
//         </div>
//       </section>
//     </>
//   );
// };

// export default NewArrivals;


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const NewArrivals = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "products" && isNew == true]{
          _id,
          name,
          isNew,
          price,
          image
        }[0..3]`;

        const result = await client.fetch(query);
        setData(result);
      } catch (err) {
        console.error("Error fetching new arrivals:", err);
        setError("Failed to load new arrivals. Please try again later.");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (data.length === 0) {
    return <div className="text-center">Loading new arrivals...</div>;
  }

  return (
    <section className="new-arrivals">
      <div className="px-4 pt-12 sm:pt-16 sm:px-8 lg:px-16">
        <h1 className="text-center mb-10 font-[900] text-[32px] sm:text-5xl">
          NEW ARRIVALS
        </h1>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((val: any) => (
              <div key={val._id} className="bg-gray-100 rounded-lg">
                <div className="rounded-lg w-full border-2 border-gray-200">
                  <Image
                    src={urlFor(val.image).url()}
                    alt={val.name}
                    className="w-full h-64 object-cover"
                    width={500}
                    height={500}
                    priority
                  />
                </div>
                <div className="space-y-1">
                  <Link href={`/product/${val._id}`}>
                    <p className="text-lg font-semibold sm:text-xl">
                      {val.name}
                    </p>
                  </Link>
                  <div className="space-y-1">
                    <p>{val._id}</p>
                    <p className="font-bold text-xl">
                      <span className="text-lg font-normal">Price:</span> $
                      {val.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link href="/shop">
          <div className="flex justify-center mt-8">
            <button className="w-full sm:w-[230px] sm:object-center text-center py-3 px-12 text-lg bg-white text-black border-2 border-gray-300 rounded-full hover:bg-black hover:text-white cursor-pointer hover:border-black transition ease-linear duration-300 active:scale-95">
              Shop Now
            </button>
          </div>
        </Link>
        <hr className="w-full border-gray-200 mt-[40px] sm:mt-16" />
      </div>
    </section>
  );
};

export default NewArrivals;

