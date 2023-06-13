import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};


const initialState: Product[] = [
  {
    id: "d23da9a1-3db1-4862-9692-8bc8450ba108",
    name: 'Delivery Services',
    price: 100.0,
    image: '/hintshubdeliver.jpeg',
  },
  {
    id: "253b1429-3d4e-4ddb-a9c4-57a766f81865",
    name: 'Construction',
    price: 14.99,
    image: '/Injinia.jpeg',
  },
  {
    id: "9899fcbd-7366-435c-8d20-5ec60098a99a",
    name: 'Arts & Lifestyle',
    price: 9.99,
    image: '/artslifestyle.jpeg',
  },
];


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      const newState = state.filter((val) => val.id !== action.payload.id);
      return newState;
    },
    resetProducts: () => {
      return [];
    },
  },
});

export const { addProduct, removeProduct, resetProducts } = productsSlice.actions;

export default productsSlice.reducer;
