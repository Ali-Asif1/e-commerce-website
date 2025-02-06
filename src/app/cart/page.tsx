"use client";

import deltet from "../../../public/images/delete.png";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/Store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "@/app/redux/CartSlice";
import Link from "next/link";
import CheckoutButton from "@/components/checkoutButton";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const calculateSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const calculateDiscount = () =>
    cartItems.reduce(
      (acc, item) =>
        acc + (item.price * item.quantity * item.discountPercent) / 100,
      0
    );

  const deliveryFee = 15;

  const total = calculateSubtotal() - calculateDiscount() + deliveryFee;

  return (
    <section className="cart">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16">
        <div>
          <h1 className="text-2xl font-bold my-6">YOUR CART</h1>
          {cartItems.length === 0 ? (
            <p className="text-center text-lg text-bold text-gray-700">
              Your cart is empty.
            </p>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2 rounded overflow-hidden">
              {/* Cart Items */}
              <div className="border border-gray-300 sm:px-4 rounded-xl mb-5 shadow-lg">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className=" border-b py-4"
                  >
                    <div className="flex gap-1 w-full justify-between">
                      <div className="border border-gray-300 rounded-md overflow-hidden">
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.name}
                          width={100}
                          height={100}
                          priority
                          className="aspect-square rounded"
                        />
                      </div>
                      <div className="flex justify-between w-full">
                        <div className="space-y-1 pt-1">
                          <p className="text-gray-900">{item.name}</p>
                          <div className="flex items-center gap-4">
                            <p className="text-gray-600">
                              ${item.price.toFixed()}
                            </p>
                            <p className="line-through text-sm text-red-500">
                              ${item.discountPercent}%
                            </p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <Image
                            onClick={() => handleRemoveItem(item._id)}
                            src={deltet}
                            alt="delete"
                            priority
                            className="object-cover cursor-pointer ml-auto"
                          />
                          <div className="flex items-center gap-[6px] border border-gray-400 p-1 rounded-md">
                            <button
                              onClick={() => handleDecreaseQuantity(item._id)}
                              className="w-6 h-6 bg-gray-900 text-white rounded-md cursor-pointer active:scale-90 duration-300 active:bg-white active:text-black"
                            >
                              -
                            </button>
                            <p className="text-sm">
                              {item.quantity}
                            </p>
                            <button
                              onClick={() => handleIncreaseQuantity(item._id)}
                              className="w-6 h-6 bg-gray-900 text-white rounded-md cursor-pointer active:scale-90 duration-300 active:bg-white active:text-black"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              
                <div className="border border-gray-300 rounded-xl p-5 shadow-lg">
                  <h1 className="text-xl font-semibold mb-4">Order Summary</h1>
                  <div>
                    <div className="flex justify-between mb-5">
                      <p className="text-base opacity-60">Subtotal</p>
                      <p className="text-base font-bold">
                        ${calculateSubtotal().toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between mb-5">
                      <p className="text-base opacity-60">Discount</p>
                      <p className="text-base font-bold text-red-600">
                        -${calculateDiscount().toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between mb-5">
                      <p className="text-base opacity-60">Delivery Fee</p>
                      <p className="text-base font-bold">${deliveryFee}</p>
                    </div>
                    <hr className="w-full border-b border-gray-200 my-5" />
                    <div className="flex justify-between">
                      <p className="text-xl font-bold">Total</p>
                      <p className="text-lg font-bold">${total.toFixed(2)}</p>
                    </div>
                  </div>
                  {/* <Link href={'/checkout'}><button className="w-full bg-black text-white p-2 rounded mt-10 active:scale-95 duration-300">
                    Go To Checkout
                  </button></Link> */}
                  {/* <Link href={`/checkout?total=${total.toFixed(2)}`}>
                    <button className="w-full bg-gray-900 text-white p-2 rounded-md mt-10 active:scale-95 duration-300">
                      Go To Checkout
                    </button>
                  </Link> */}
                  <CheckoutButton />
                </div>
              </div>
            
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;




