// // "use client";

// // import Image from "next/image";
// // import logo from "../../public/images/logo.png";
// // import menubar from "../../public/images/menubar.svg";
// // import search from "../../public/images/search.svg";
// // import cart from "../../public/images/cart.svg";
// // import signup from "../../public/images/signup.svg";

// // import Link from "next/link";
// // import { useState } from "react";
// // import { useAppSelector } from "@/app/redux/hooks";

// // export const Header2 = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [shopMenu, setShopMenu] = useState(false);

// //   const items = useAppSelector((state) => state.cart.items);

// //   return (
// //     <section className="second-header">
// //       <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 min-h-[64px] sm:min-h-[96px]">
// //         <div className="flex min-h-[96px] items-center justify-between gap-4 border-b-2 border-gray-200">
// //           <div className="flex gap-3">
// //             <div className="md:hidden cursor-pointer">
// //               <Image
// //                 src={menubar}
// //                 alt="logo"
// //                 onClick={() => setMenuOpen(!menuOpen)}
// //                 className="relative"
// //                 priority
// //               />
// //               {menuOpen ? (
// //                 <div className="absolute w-[92%] mt-4 max-h-full bg-gray-200 rounded-lg z-10 duration-200 flex flex-col gap-6 font-semibold p-5">
// //                   <div className="space-y-2">
// //                     <Link href={"/"}>Home</Link>
// //                     <hr className="border border-gray-300" />
// //                   </div>
// //                   <div className="space-y-2">
// //                     <Link href={"/product"}>Products</Link>
// //                     <hr className="border border-gray-300" />
// //                   </div>
// //                   <div className="space-y-2">
// //                     <Link href={"/"}>Category</Link>
// //                     <hr className="border border-gray-300" />
// //                   </div>

// //                 </div>
// //               ) : null}
// //             </div>
// //             <Link href={"/"}>
// //               <Image src={logo} alt="logo" priority />
// //             </Link>
// //           </div>

// //           <div className="hidden md:flex gap-4">
// //             <div>
// //               <Link href={"/"}>Home</Link>
// //             </div>
// //             <div>
// //               <Link href={"/product"}>Products</Link>
// //             </div>
// //             <div className="relative">
// //               <Link href="/" onClick={() => setShopMenu(!shopMenu)} className="cursor-pointer">Category</Link>
// //                 {shopMenu ? <div className="absolute w-20 top-7 text-sm shadow-2xl bg-white border-2 border-gray-300 rounded-md z-10 duration-300 p-2">
// //                   <Link href={'/category'}><h1 className=" text-gray-700 mb-1">Shirt</h1></Link>
// //                   <Link href={''}><h1 className=" text-gray-700 mb-1">T-Shirt</h1></Link>
// //                   <Link href={''}><h1 className=" text-gray-700 mb-1">Jeans</h1></Link>
// //                   <Link href={''}><h1 className=" text-gray-700 mb-1">Hoddie</h1></Link>
// //                   <Link href={''}><h1 className=" text-gray-700">shorts</h1></Link>
// //                 </div>:null }
// //             </div>
// //             {/* <div className="flex relative">
// //               <Link href="/">Category</Link>
// //               <Image
// //                 src={downarrow}
// //                 priority
// //                 alt="logo"
// //                 onClick={() => setShopMenu(!shopMenu)}
// //                 className="cursor-pointer"
// //               />
// //               {shopMenu ? (
// //                 <div className="absolute w-28 top-6 left-[90px] text-sm shadow-2xl bg-white border border-gray-300 rounded-lg z-10 duration-300 px-2 py-2 space-y-2">
// //                   <Link href={'category'}>
// //                     <h1 className="text-gray-700">Shirt</h1>
// //                   </Link>
// //                   <Link href="/category/t-shirt">
// //                     <h1 className="text-gray-700">T-Shirt</h1>
// //                   </Link>
// //                   <Link href="/category/jeans">
// //                     <h1 className="text-gray-700">Jeans</h1>
// //                   </Link>
// //                   <Link href="/category/hoodie">
// //                     <h1 className="text-gray-700">Hoodie</h1>
// //                   </Link>
// //                 </div>
// //               ) : null}
// //             </div> */}
// //           </div>
// //           <div className="flex-1 hidden md:block  rounded-ful max-w-[577px] bg-gray-200 rounded">
// //             <div className="flex items-center opacity-3 h-10 gap-3 pl-[18px]">
// //               <Image src={search} priority alt="logo" className="opacity-35" />
// //               <input
// //                 type="text"
// //                 placeholder="Search for products..."
// //                 className="hidden md:block flex-1 bg-gray-200 rounded-full w-0 outline-none pl-1"
// //               />
// //             </div>
// //           </div>

// //           <div className="flex gap-4">
// //             <Image
// //               src={search}
// //               priority
// //               alt="logo"
// //               className="block md:hidden"
// //             />
// //             <div className="relative">
// //               <Link href={"/cart"}>
// //                 <Image src={cart} priority alt="logo" />
// //               </Link>
// //               <div className="bg-slate-500 w-4 absolute bottom-[14px] left-4 rounded-full text-center text-white text-xs">
// //                 {items.length}
// //               </div>
// //             </div>
// //             <Image src={signup} priority alt="logo" />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";
// import logo from "../../public/images/logo.png";
// import menubar from "../../public/images/menubar.svg";
// import search from "../../public/images/search.svg";
// import cart from "../../public/images/cart.svg";
// import signup from "../../public/images/signup.svg";
// import { useAppSelector } from "@/app/redux/hooks";


// // Fetch categories from Sanity
// const fetchCategories = async () => {
//   const query = `*[_type == "products"]{ category }`;
//   const products = await client.fetch(query);

//   // Ensure valid categories (remove undefined/null)
//   const categories = products.map((p: any) => p.category).filter(Boolean); // Removes null, undefined, ""

//   return Array.from(new Set(categories)); // Convert Set to Array
// };

// export const Header2 = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [shopMenu, setShopMenu] = useState(false);
//   const [categories, setCategories] = useState<string[]>([]);

//   const items = useAppSelector((state) => state.cart.items);

//   useEffect(() => {
//     fetchCategories().then((data) => setCategories(data as string[]));
//   }, []);
  
//   return (
//     <section className="second-header">
//       <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 min-h-[64px] sm:min-h-[96px]">
//         <div className="flex min-h-[96px] items-center justify-between gap-4 border-b-2 border-gray-200">
//           <div className="flex gap-3">
//             <div className="md:hidden cursor-pointer">
//               <Image
//                 src={menubar}
//                 alt="menu"
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="relative"
//                 priority
//               />
//               {menuOpen && (
//                 <div className="absolute w-[90%] h-60 mt-2 bg-gray-100 border border-gray-300 drop-shadow max-h-full rounded-lg z-10 duration-200 flex flex-col gap-2 font-semibold px-6 py-2">
//                   <Link href="/" className="text-gray-900">
//                     Home
//                   </Link>

//                   <Link href="/product" className="text-gray-900">
//                     Products
//                   </Link>

//                   <div className="relative shop-menu-container">
//                     <button
//                       onClick={() => setShopMenu(!shopMenu)}
//                       className="cursor-pointer text-gray-900"
//                     >
//                       Category
//                     </button>
//                     {shopMenu && (
//                       <div className="absolute w-24 top-6 left-14 text-sm shadow-xl bg-white border-2 border-gray-300 rounded-md z-10 duration-300 px-2 pt-1">
//                         {categories.length > 0 ? (
//                           categories.map((category) => (
//                             <Link
//                               key={category}
//                               href={`/category/${category.toLowerCase()}`}
//                             >
//                               <h1 className="text-gray-700 mb-1 cursor-pointer hover:text-black capitalize">
//                                 {category}
//                               </h1>
//                             </Link>
//                           ))
//                         ) : (
//                           <p className="text-gray-500">Loading...</p>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 </div>
                
//               )}
//             </div>
//             <Link href="/">
//               <Image src={logo} alt="logo" priority />
//             </Link>
//           </div>

//           <div className="hidden md:flex gap-4">
//             <Link href="/">Home</Link>
//             <Link href="/product">Products</Link>
//             <div className="relative">
//               <button
//                 onClick={() => setShopMenu(!shopMenu)}
//                 className="cursor-pointer"
//               >
//                 Category
//               </button>
//               {shopMenu && (
//                 <div className="absolute w-24 top-7 -left-1 text-sm shadow-2xl bg-white border-2 border-gray-300 rounded-md z-10 duration-300 p-2">
//                   {categories.length > 0 ? (
//                     categories.map((category) => (
//                       <Link
//                         key={category}
//                         href={`/category/${category.toLowerCase()}`}
//                       >
//                         <h1 className="text-gray-700 mb-1 cursor-pointer hover:text-black capitalize">
//                           {category}
//                         </h1>
//                       </Link>
//                     ))
//                   ) : (
//                     <p className="text-gray-500">Loading...</p>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="flex-1 hidden md:block max-w-[577px] bg-gray-200 rounded">
//             <div className="flex items-center h-10 gap-3 pl-[18px]">
//               <Image
//                 src={search}
//                 priority
//                 alt="search"
//                 className="opacity-35"
//               />
//               <input
//                 type="text"
//                 placeholder="Search for products..."
//                 className="bg-gray-200 rounded-full w-full outline-none pl-1"
//               />
//             </div>
//           </div>

//           <div className="flex gap-4">
//             <Image
//               src={search}
//               priority
//               alt="search"
//               className="block md:hidden"
//             />
//             <div className="relative">
//               <Link href="/cart">
//                 <Image src={cart} priority alt="cart" />
//               </Link>
//               <div className="bg-slate-500 w-4 absolute bottom-[14px] left-4 rounded-full text-center text-white text-xs">
//                 {items.length}
//               </div>
//             </div>
//             <Image src={signup} priority alt="signup" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import logo from "../../public/images/logo.png";
import menubar from "../../public/images/menubar.svg";
import search from "../../public/images/search.svg";
import cart from "../../public/images/cart.svg";
import signup from "../../public/images/signup.svg";
import { useAppSelector } from "@/app/redux/hooks";

// Fetch categories from Sanity
const fetchCategories = async () => {
  const query = `*[_type == "products"]{ category }`;
  const products = await client.fetch(query);

  const categories = products.map((p: any) => p.category).filter(Boolean); // Remove null/undefined
  return Array.from(new Set(categories)); // Remove duplicates
};

export const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  const items = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data as string[]));
  }, []);

  return (
    <section className="second-header">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 min-h-[64px] sm:min-h-[96px]">
        <div className="flex min-h-[96px] items-center justify-between gap-4 border-b-2 border-gray-200">
          <div className="flex items-center gap-3">
            {/* Mobile Menu */}
            <div className="md:hidden cursor-pointer relative">
              <Image
                src={menubar}
                alt="menu"
                onClick={() => setMenuOpen(!menuOpen)}
                priority
              />
              {menuOpen && (
                <div className="absolute mt-2 bg-gray-100 border border-gray-300 shadow-lg rounded-lg z-10 flex flex-col gap-2 font-semibold px-6 py-2">
                  <Link href="/" className="text-gray-900">
                    Home
                  </Link>
                  <Link href="/product" className="text-gray-900">
                    Products
                  </Link>

                  {/* Mobile Category Dropdown */}
                  <div className="relative flex">
                    <button
                      onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                      className="w-full text-left text-gray-900 flex gap-1"
                    >
                      Category ▶
                    </button>
                    {mobileSubmenuOpen && (
                      <div className="pl-3 mt-[2px]">
                        {categories.length > 0 ? (
                          categories.map((category) => (
                            <Link
                              key={category}
                              href={`/category/${category.toLowerCase()}`}
                              className="block text-gray-700 hover:text-black capitalize"
                            >
                              {category}
                            </Link>
                          ))
                        ) : (
                          <p className="text-gray-500">Loading...</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Logo */}
            <Link href="/">
              <Image src={logo} alt="logo" priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/product">Products</Link>

            {/* Category Dropdown */}
            <div className="relative">
              <button onClick={() => setSubmenuOpen(!submenuOpen)} className="cursor-pointer">
                Category ▼
              </button>
              {submenuOpen && (
                <div className="absolute w-24 mt-1  bg-white border border-gray-300 shadow-lg rounded-md p-2 space-y-1">
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <Link
                        key={category}
                        href={`/category/${category.toLowerCase()}`}
                        className="block text-gray-700 hover:text-black capitalize"
                      >
                        {category}
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-500">Loading...</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 hidden md:block max-w-[577px] bg-gray-200 rounded">
            <div className="flex items-center h-10 gap-3 pl-[18px]">
              <Image src={search} priority alt="search" className="opacity-35" />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-gray-200 rounded-full w-full outline-none pl-1"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex gap-4">
            <Image src={search} priority alt="search" className="block md:hidden" />
            <div className="relative">
              <Link href="/cart">
                <Image src={cart} priority alt="cart" />
              </Link>
              <div className="bg-slate-500 w-4 absolute bottom-[14px] left-4 rounded-full text-center text-white text-xs">
                {items.length}
              </div>
            </div>
            <Image src={signup} priority alt="signup" />
          </div>
        </div>
      </div>
    </section>
  );
};
