"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/Store";

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

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
    <section className="checkout">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16">
        <h1 className="text-3xl md:text-5xl font-bold my-4">Checkout</h1>
        <div className="border border-gray-300 rounded-xl p-5">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="opacity-60">Subtotal</p>
              <p className="font-bold">${calculateSubtotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="opacity-60">Discount</p>
              <p className="font-bold text-red-600">
                -${calculateDiscount().toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="opacity-60">Delivery Fee</p>
              <p className="font-bold">${deliveryFee}</p>
            </div>
            <hr className="border-b border-gray-200" />
            <div className="flex justify-between">
              <p className="font-bold">Total</p>
              <p className="text-xl font-bold">${total.toFixed(2)}</p>
            </div>
          </div>
          <button className="bg-black text-white w-full h-12 rounded-full mt-4 active:scale-90 transition duration-300">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
