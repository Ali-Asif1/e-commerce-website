// "use client";
// export const dynamic = "force-dynamic";

// import { useRouter, useSearchParams } from "next/navigation";
// import { useAppSelector } from "../redux/hooks";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { useEffect, useState } from "react";

// const Checkout = () => {
//   const searchParams = useSearchParams();
// const [total, setTotal] = useState(0);

// useEffect(() => {
//   const totalStr = searchParams.get("total") || "0";
//   setTotal(parseFloat(totalStr));
// }, [searchParams]);

//   const cartItems = useAppSelector((state) => state.cart.items);
//   const [form, setForm] = useState({
//     fullname: "",
//     email: "",
//     address: "",
//     phone: "",
//   });
//   const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
    
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     router.push("/order-confirmation");
//   };

//   return (
//     <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16">
//       <h2 className="text-2xl font-bold my-6">Checkout</h2>
//       <div className="grid gap-6 sm:grid-cols-2 rounded overflow-hidden">
//         {/* Order Summary */}
//         <div className="border-2 border-gray-300 p-4 mb-6 rounded-lg shadow-lg">
//           <h3 className="text-xl font-semibold mb-3">Order Summary</h3>
//           {cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="flex items-center gap-2 border-b py-3"
//             >
//               <Image
//                 src={urlFor(item.image).url()}
//                 alt={item.name}
//                 width={100}
//                 height={100}
//                 className="w-16 h-16 object-cover mr-4 rounded"
//               />
//               <div>
//                 <p className="text-gray-900">{item.name}</p>
//                 <p className="text-gray-600">${item.price.toFixed()}</p>
//               </div>
//             </div>
//           ))}
//           <div className="mt-4 text-lg font-semibold flex justify-between">
//             <span>Total Amount:</span>
//             <span>${total.toFixed(2)}</span>
//           </div>
//         </div>


//         {/* Shipping Details Form */}
//         <form
//           onSubmit={handleSubmit}
//           autoComplete="off"
//           className="border-2 border-gray-300 p-4 mb-6 rounded-lg shadow-lg"
//         >
//           <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
//           <div className="mb-4">
//             <label className="block text-gray-900">Full Name</label>
//             <input
//               type="text"
//               name="fullname"
//               value={form.fullname}
//               onChange={handleChange}
//               required
//               className="w-full text-gray-600 bg-gray-200 outline-gray-300 p-2 border border-gray-200 capitalize rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-900">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full text-gray-600 bg-gray-200  p-2 border border-gray-200  rounded outline-gray-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-900">Shipping Address</label>
//             <input
//               type="text"
//               name="address"
//               value={form.address}
//               onChange={handleChange}
//               required
//               className="w-full text-gray-600 bg-gray-200 p-2 border border-gray-200 rounded outline-gray-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-900">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               required
//               className="w-full text-gray-600 bg-gray-200 p-2 border border-gray-200 rounded outline-gray-300"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gray-900 text-white p-2 rounded-md mt-2 active:scale-95 duration-300"
//           >
//             Place Order
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;



import { Suspense } from "react";
import Checkout from "@/components/checkout"; // Move your Checkout logic to a separate file

// export const dynamic = "force-dynamic"; // Prevents static generation

export default function CheckoutDisplay() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <Checkout />
    </Suspense>
  );
}

