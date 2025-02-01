import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductType {
  _id: string;
  name: string;
  price: number;
  discountPercent: number;
  image: string;
}

const getProductsByCategory = async (category: string) => {
  const query = `*[_type == "products" && category == $category]{
    _id,
    name,
    price,
    image,
    discountPercent
  }`;

  return await client.fetch(query, { category });
};

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const products = await getProductsByCategory(params.slug);

  if (!products.length) {
    return notFound();
  }

  return (
    <div className="px-4 py-12 sm:px-8 lg:px-16">
      <h1 className="text-2xl sm:text-4xl text-center font-bold uppercase mb-6">
        {params.slug} Collection
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 rounded overflow-hidden">
        {products.map((product: ProductType) => (
          <div
            key={product._id}
            className=" bg-gray-100 rounded-lg border-2 border-gray-300 p-2 shadow-xl"
          >
            <div className="rounded-lg w-full h-72 mb-3 drop-shadow">
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg hover:scale-105 duration-300"
              />
            </div>
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <div className="flex justify-between items-center">
              <p className="text-gray-700">${product.price}</p>
              <p className="w-12 h-6 text-sm  text-white text-center bg-gray-400 border rounded">
                -{product.discountPercent}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
