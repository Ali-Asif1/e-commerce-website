import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
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
    <section className="all products">
      <div className="px-4 pt-12 sm:pt-16 sm:px-8 lg:px-16">
        <h1 className="text-2xl sm:text-4xl text-center font-bold uppercase mb-6">
          {params.slug} Collection
        </h1>
        <div>
          <div className="grid justify-between px-4 lg:px-0 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3 rounded overflow-hidden">
            {products.map((val: ProductType) => (
              <div
                key={val._id}
                className=" bg-gray-100 rounded-lg border-2 border-gray-400 p-2 overflow-hidden shadow-xl "
              >
                <Link href={`/product/${val._id}`}>
                  <div className="rounded-lg w-full mb-5 drop-shadow-md">
                    <Image
                      src={urlFor(val.image).url()}
                      alt={val.name}
                      className="aspect-square object-cover rounded-lg hover:scale-105 duration-300"
                      width={500}
                      height={500}
                      priority
                    />
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
      </div>
    </section>
  );
}
