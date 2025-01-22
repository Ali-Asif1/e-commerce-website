// store/cartSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
//       const existingItem = state.items.find((item) => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity++;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     increaseQuantity: (state, action: PayloadAction<string>) => {
//       const item = state.items.find((item) => item.id === action.payload);
//       if (item) item.quantity++;
//     },
//     decreaseQuantity: (state, action: PayloadAction<string>) => {
//       const item = state.items.find((item) => item.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity--;
//       } else {
//         state.items = state.items.filter((item) => item.id !== action.payload);
//       }
//     },
//     removeItem: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;



// store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the CartItem interface
interface CartItem {
  _id: string; // The unique identifier of the product
  name: string; // The name of the product
  description: string; // A description of the product
  price: number; // The price of the product
  discountPercent: number; // Discount percentage on the product
  image: string;
  colors: string[]; // Array of color options
  sizes: string[]; // Array of size options
  quantity:number;
  }
  
  interface Product {
    _id: string; // The unique identifier of the product
    name: string; // The name of the product
    description: string; // A description of the product
    price: number; // The price of the product
    discountPercent: number; // Discount percentage on the product
    image: string;
 
    colors: string[]; // Array of color options
    sizes: string[]; // Array of size options
  }


// Define the CartState interface
interface CartState {
  items: CartItem[];
}

// Initial state of the cart
const initialState: CartState = {
  items: [],
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart (or increase quantity if it exists)
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find((item) => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Increase quantity of a specific item
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item._id === action.payload);
      if (item) item.quantity++;
    },

    // Decrease quantity of a specific item (remove if quantity reaches 0)
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter((item) => item._id !== action.payload);
      }
    },

    // Remove item from the cart
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
  },
});

// Export actions and reducer
export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;




