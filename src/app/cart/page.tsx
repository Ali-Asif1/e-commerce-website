// "use client";

// import deltet from "../../../public/images/delete.png";
// import code from "../../../public/images/promocode.png";

// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/app/redux/Store";
// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeItem,
// } from "@/app/redux/CartSlice";

// const Cart = () => {
//   const cartItems = useSelector((state: RootState) => state.cart.items);
//   const dispatch = useDispatch();

//   const handleIncreaseQuantity = (id: string) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleDecreaseQuantity = (id: string) => {
//     dispatch(decreaseQuantity(id));
//   };

//   const handleRemoveItem = (id: string) => {
//     dispatch(removeItem(id));
//   };

//   return (
//     <section className="cart">
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="border-t-2 border-t-gray-200">
//           <h1 className="text-3xl md:text-5xl font-[900] my-4">YOUR CART</h1>
//           {cartItems.length === 0 ? (
//             <p className=" text-center text-lg text-bold text-gray-700">
//               Your cart is empty.
//             </p>
//           ) : (
//             cartItems.map((item, idx: number) => (
//               <div className="lg:grid lg:grid-cols-5 gap-5">
//                 <div
//                   key={item._id}
//                   className="border border-gray-300 sm:px-4 rounded-xl col-span-3">
//                   <div className="flex">
//                     <div className="rounded-lg">
//                       <Image
//                         src={urlFor(item.image).url()}
//                         alt="shirts"
//                         width={200}
//                         height={200}
//                         priority
//                         className="object-cover"
//                       />
//                     </div>
//                     <div className="w-full pt-6">
//                       <div className="flex items-center justify-between">
//                         <p className="sm:text-lg font-semibold">
//                           {item.name}
//                         </p>
//                         <Image
//                           onClick={() => handleRemoveItem(item._id)}
//                           src={deltet}
//                           alt="shirt"
//                           priority
//                           className="object-cover mr-2"
//                         />
//                       </div>
//                       <div className="flex justify-between mt-2">
//                         <div>
//                           <p className="font-semibold sm:text-xl">
//                           <span className="text-base font-normal">$</span> {item.price}</p>
//                         </div>
//                         <button className="w-20 sm:w-28 bg-gray-300 mx-2 rounded-xl flex justify-around items-center">
//                           <span
//                             onClick={() => handleDecreaseQuantity(item._id)}
//                             className="font-semibold text-lg sm:text-2xl px-1 sm:px-2 border-r-2 border-gray-200"
//                           >
//                             -
//                           </span>
//                           <p className="text-xs sm:text-sm">
//                             $ {item.price * item.quantity}
//                           </p>
//                           <span
//                             onClick={() => handleIncreaseQuantity(item._id)}
//                             className="font-semibold text-lg sm:text-2xl px-1 sm:px-2 border-l-2 border-gray-50"
//                           >
//                             +
//                           </span>
//                         </button>
//                       </div>

                     
//                         <p className="text-sm sm:text-base">Discount <span className="font-semibold">({item.discountPercent}%)</span> </p>
                        
                    
//                     </div>
//                   </div>
//                 </div>

//                 <div className="order-summary col-span-2">
//                   <div className="border border-gray-300 rounded-xl p-5 mt-5 md:mt-0">
//                     <h1>Order Summary</h1>
//                     <div>
//                       <div className="flex justify-between mb-5">
//                         <p className="text-base opacity-60 ">Subtotal</p>
//                         <p className="text-base font-bold">$565</p>
//                       </div>
//                       <div className="flex justify-between mb-5">
//                         <p className="text-base opacity-60 ">Discount (-20%)</p>
//                         <p className="text-base font-bold text-red-600">$113</p>
//                       </div>
//                       <div className="flex justify-between">
//                         <p className="text-base opacity-60 ">Delivery Free</p>
//                         <p className="text-base font-bold">$15</p>
//                       </div>
//                       <hr className="w-full border-b border-gray-200 my-5" />

//                       <div className="flex justify-between">
//                         <p className="text-base ">Total</p>
//                         <p className="text-xl font-bold">$467</p>
//                       </div>

//                       <div className="flex items-center justify-between gap-3 mt-4">
//                         <button className="flex items-center w-[70%] h-[48px] rounded-full bg-gray-200 p-4 gap-3">
//                           <Image
//                             src={code}
//                             className=" opacity-50"
//                             alt="downarrow"
//                           />
//                           <input
//                             type=" text"
//                             placeholder="Add promo code"
//                             className="bg-gray-200 max-w-32 outline-none"
//                           />
//                         </button>
//                         <button className="bg-black text-white w-[30%] h-12 rounded-full active:scale-90">
//                           Apply
//                         </button>
//                       </div>
//                       <button className="bg-black text-white w-full h-12 rounded-full mt-4 active:scale-90">
//                         Go To Checkout
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Cart;






"use client";

import deltet from "../../../public/images/delete.png";
import code from "../../../public/images/promocode.png";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/Store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "@/app/redux/CartSlice";

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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t-2 border-t-gray-200">
          <h1 className="text-3xl md:text-5xl font-[900] my-4">YOUR CART</h1>
          {cartItems.length === 0 ? (
            <p className="text-center text-lg text-bold text-gray-700">
              Your cart is empty.
            </p>
          ) : (
            <div className="lg:grid lg:grid-cols-5 gap-5">
              {/* Cart Items */}
              <div className="col-span-3">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="border border-gray-300 sm:px-4 rounded-xl mb-5"
                  >
                    <div className="flex">
                      <div className="rounded-lg">
                        <Image
                          src={urlFor(item.image).url()}
                          alt="shirts"
                          width={200}
                          height={200}
                          priority
                          className="object-cover"
                        />
                      </div>
                      <div className="w-full pt-6">
                        <div className="flex items-center justify-between">
                          <p className="sm:text-lg font-semibold">
                            {item.name}
                          </p>
                          <Image
                            onClick={() => handleRemoveItem(item._id)}
                            src={deltet}
                            alt="delete"
                            priority
                            className="object-cover mr-2 cursor-pointer"
                          />
                        </div>
                        <div className="flex justify-between mt-2">
                          <div>
                            <p className="font-semibold sm:text-xl">
                              <span className="text-base font-normal">$</span>{" "}
                              {item.price}
                            </p>
                          </div>
                          <button className="w-20 sm:w-28 bg-gray-300 mx-2 rounded-xl flex justify-around items-center">
                            <span
                              onClick={() => handleDecreaseQuantity(item._id)}
                              className="font-semibold text-lg sm:text-2xl px-1 sm:px-2 border-r-2 border-gray-200 cursor-pointer"
                            >
                              -
                            </span>
                            <p className="text-xs sm:text-sm">
                              {item.quantity}
                            </p>
                            <span
                              onClick={() => handleIncreaseQuantity(item._id)}
                              className="font-semibold text-lg sm:text-2xl px-1 sm:px-2 border-l-2 border-gray-50 cursor-pointer"
                            >
                              +
                            </span>
                          </button>
                        </div>
                        <p className="text-sm sm:text-base">
                          Discount{" "}
                          <span className="font-semibold">
                            ({item.discountPercent}%)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="order-summary col-span-2">
                <div className="border border-gray-300 rounded-xl p-5">
                  <h1 className="text-xl font-bold mb-4">Order Summary</h1>
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
                      <p className="text-base font-bold">Total</p>
                      <p className="text-xl font-bold">${total.toFixed(2)}</p>
                    </div>
                  </div>
                  <button className="bg-black text-white w-full h-12 rounded-full mt-4 active:scale-90">
                    Go To Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
