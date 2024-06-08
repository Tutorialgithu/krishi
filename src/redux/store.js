import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import cartReducer from './cartSlice';
import addressReducer from './addressSlice';
import paymentReducer from './paymentSlice';
import orderReducer from './orderSlice';
export const store = configureStore({
  reducer: {
    product: productReducer, 
    cart: cartReducer,
    address: addressReducer,
    payment: paymentReducer,
    order: orderReducer
  },
})

export default store