



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
