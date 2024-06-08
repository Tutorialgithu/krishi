// src/redux/paymentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        methods: ['Credit Card', 'PayPal', 'Bank Transfer'],
        selectedMethod: '',
    },
    reducers: {
        selectPaymentMethod: (state, action) => {
            state.selectedMethod = action.payload;
        },
    },
});

export const { selectPaymentMethod } = paymentSlice.actions;

export default paymentSlice.reducer;
