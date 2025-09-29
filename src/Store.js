import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './Slices/CartSlice'

export default configureStore({
  reducer: {
    cartDetails: CartSlice
  }
})