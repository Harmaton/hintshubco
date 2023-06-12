
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';
import { RootState } from '../store';

type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
}

const initialState: Product[] = [
    {
        id: nanoid(),
        name: 'Delivery Services',
        price: 100.0,
        image: '/hintshubdeliver.jpeg'
      },
      {
        id: nanoid(),
        name: 'Construction',
        price: 14.99,
        image: '/Injinia.jpeg',
      },
      {
        id: nanoid(),
        name: 'Arts & Lifestyle',
        price: 9.99,
        image: '/artslifestyle.jpeg',
      },
    ]


export const productsSlice = createSlice({
name: "products",
initialState,
reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
        state.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
        // val is the actual item in the index
        const newState = state.filter(val => val.id !== action.payload.id );
        return newState
    },
    resetProducts: (state, action: PayloadAction<Product>) => {
        state = []
        return state
    }
}
})

export const { addProduct, removeProduct, resetProducts} = productsSlice.actions


export default productsSlice.reducer