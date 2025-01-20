'use client'
import { useDispatch, useSelector } from 'react-redux';

import { increaseQuantity, decreaseQuantity, removeItem } from '../../redux/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state:any) => state.cart.items);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item:any) => (
            <li
              key={item.id}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div>
                <p className="font-bold">{item.name}</p>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="px-4 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
