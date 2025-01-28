
import { client } from "@/sanity/lib/client";



export async function getNewArrivals(){
    const query = `*[_type == "products" && isNew == true]{
      _id,
      name,
      discountPercent,
      price,
      image
    }`;
    const data = await client.fetch(query);
    return data;
  }

  