

import { client } from "@/sanity/lib/client";
import React from "react";

interface Product {
  category: string;
}

// Fetch data from Sanity
async function getData() {
  const query = `*[_type == "products"]{
    category
  }`;

  const data = await client.fetch(query);

  // Extract unique categories
  const uniqueCategories = Array.from(new Set(data.map((item: Product) => item.category)));

  return uniqueCategories;
}

export const Category = async () => {
  const data = await getData();
  
  return (
    <section>
      <div>
        {data.map((category: any, idx: number) => (
          <div key={idx}>
            {category}
          </div>
        ))}
      </div>
    </section>
  );
};



