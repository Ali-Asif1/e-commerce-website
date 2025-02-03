
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import StarRating from "@/components/starRating";
import AddToCartButton from "@/app/addToCartButton/addToCartButton";
import { notFound } from "next/navigation";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercent: number;
  image: string;
  colors: string[];
  sizes: string[];
}

const fetchProduct = async (productId: string) => {
  try {
    const query = `*[_type == "products" && _id == "${productId}"][0]`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const SingleProduct = async ({ params }: { params: { product: string } }) => {
  const product:Product = await fetchProduct(params.product);

  // if (!product) {
  //   return <div className="text-center text-red-500">Product not found.</div>;
  // }
  if (!product) {
      return notFound();
    }

  return (
    <div className="md:grid grid-cols-2 gap-6 px-4 sm:px-8 md:px-12 lg:px-16 my-4 md:my-10">

      {/* Product Image */}
      <div className="w-fit h-[550px] rounded-lg border-2 border-gray-300 overflow-hidden">
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          width={500}
          height={500}
          priority
          className="h-full object-cover object-center rounded-lg"
        />
      </div>

      
      <div className="py-6">
        <h1 className="font-bold text-2xl md:text-3xl uppercase mb-3">
          {product.name}
        </h1>
        <StarRating totalStars={5} />
        <div className="flex gap-6 items-center mt-3">
          <p className="font-bold text-xl sm:text-2xl">${product.price}</p>
          <p className="font-semibold text-xl line-through text-gray-400">
            {product.discountPercent}%
          </p>
        </div>
        <p className="mt-5 text-sm sm:text-base opacity-70">
          {product.description}
        </p>

        {/* Select Color */}
        <div className="flex justify-between items-center">
        <div className="mt-4">
          <p className="text-gray-700 mb-2">Select Color</p>
          <div className="flex space-x-4">
            {product.colors.map((color) => (
              <span
                key={color}
                className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border hover:border-black active:border cursor-pointer"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </div>

        {/* Select Size */}
        <div className="mt-4">
          <p className="text-gray-700 mb-2">Select Size</p>
          <div className="flex gap-3 ">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="w-9 h-9 border active:bg-white active:text-black rounded-md text-sm text-center content-center bg-gray-950 text-white active:scale-90 duration-300  cursor-pointer"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-center mt-10">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
