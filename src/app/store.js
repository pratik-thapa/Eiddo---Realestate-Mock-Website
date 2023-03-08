import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './counterslice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})