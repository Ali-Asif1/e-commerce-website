import Image from "next/image";
import tshirt from "../../public/images/tshirt.png";
import shirt from "../../public/images/shirt.png";
import jeans from "../../public/images/jeans.png";
import tshirt2 from "../../public/images/tshirt2.png";
import stars3 from "../../public/images/stars.svg";
import stars4 from "../../public/images/jeansstar.svg";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";



async function getData(){
  const query = (`*[_type == "products" && isNew == true]{
    _id,
    name,
    isNew,
    price,
    image,
  }[0..3]`);

  const data = await client.fetch(query);

  return data;
}



export async function NewArrivals() {
  const data =await getData()
  return (
    <>
      <section className="new-arrivals">
        
        <div className="px-4 pt-12 sm:pt-16 sm:px-8 lg:px-16">
          <h1 className="text-center mb-10 font-[900] text-[32px] sm:text-5xl ">
            NEW ARRIVALS
          </h1>
          <div>
          
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {data.map((val:any, i:number)=>(
              <div key={i} className=" bg-gray-100 rounded-lg">
                <div className="rounded-lg w-full border-2 border-gray-200">
                  <Image
                    src={urlFor(val.image).url()}
                    alt="tshirt"
                    className="w-full h-64 object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="space-y-1">
                  <Link href={`/product/${val._id}`}><p className="text-lg font-semibold sm:text-xl">
                   {val.name}
                  </p></Link>
                  <div className="space-y-1">
                    <p>{val._id}</p>
                   
                    <p className="font-bold text-xl"><span className="text-lg font-normal">Price:</span> ${val.price}</p>
                  </div>
                </div>
              </div>))}

            </div>
          </div>
          <Link href={'/shop'}><div className="flex justify-center mt-8"><button className="w-full sm:w-[230px] sm:object-center text-center py-3 px-12 text-lg bg-white text-black border-2 border-gray-300 rounded-full hover:bg-black hover:text-white cursor-pointer hover:border-black transition ease-linear duration-300 active:scale-95">
            Shop Now</button></div>
          <hr className="w-full border-gray-200 mt-[40px] sm:mt-16"/></Link>
        </div>
      </section>
    </>
  );
};
