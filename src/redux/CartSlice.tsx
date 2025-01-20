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

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity++;
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

export const selectTotalItems = (state: CartState) =>
  state.items.reduce((total, item) => total + item.quantity, 0);

