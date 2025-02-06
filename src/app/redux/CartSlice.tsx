
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CartItem {
  _id: string; 
  name: string; 
  description: string; 
  price: number; 
  discountPercent: number; 
  image: string;
  colors: string[]; 
  sizes: string[]; 
  quantity:number;
  }
  
  interface Product {
    _id: string; 
    name: string; 
    description: string;
    price: number; 
    discountPercent: number; 
    image: string;
 
    colors: string[]; 
    sizes: string[]; 
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
      const existingItem = state.items.find((item) => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

   
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item._id === action.payload);
      if (item) item.quantity++;
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter((item) => item._id !== action.payload);
      }
    },

   
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
  },
});


export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;




