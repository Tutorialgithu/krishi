// redux/addressSlice.js
import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        addresses: [],
    },
    reducers: {
        addAddress: (state, action) => {
            state.addresses.push(action.payload);
        },
        updateAddress: (state, action) => {
            const index = state.addresses.findIndex(addr => addr.id === action.payload.id);
            if (index !== -1) {
                state.addresses[index] = action.payload;
            }
        },
    },
});

export const { addAddress, updateAddress } = addressSlice.actions;

export default addressSlice.reducer;
