"use client";

import { useAppDispatch } from "@/app/redux/hooks";
import { addItem } from "@/app/redux/CartSlice";

const AddToCartButton = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-black text-white w-[80%] h-12 rounded-md border-2 border-black hover:text-black hover:bg-gray-100 active:scale-90 duration-300 cursor-pointer"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
