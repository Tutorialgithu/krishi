import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [], // Lok Storage se load karein
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.items)); // Lok Storage mein save karein
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.items)); // Lok Storage mein save karein
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.items)); // Lok Storage mein save karein
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem('cartItems'); // Lok Storage se remove karein
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
