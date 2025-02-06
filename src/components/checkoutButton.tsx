
"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/Store";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image"; 

const CheckoutButton = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const calculateSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const calculateDiscount = () =>
    cartItems.reduce(
      (acc, item) =>
        acc + (item.price * item.quantity * (item.discountPercent || 0)) / 100,
      0
    );

  const deliveryFee = 15; 
  const subtotal = calculateSubtotal();
  const discount = calculateDiscount();
  const total = subtotal - discount + deliveryFee; 

  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return alert("Your cart is empty");

    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartItems.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          discountPercent: item.discountPercent || 0, // Ensure it's not undefined
          image: urlFor(item.image).url(), 
        })),
        total, // Send total to API
      }),
    });

    const { url } = await res.json();
    setLoading(false);

    if (url) window.location.href = url;
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full bg-black text-white p-2 rounded mt-10 active:scale-95 duration-300"
    >
      {loading ? "Processing..." : `Pay $${total.toFixed(2)}`}
    </button>
  );
};

export default CheckoutButton;
