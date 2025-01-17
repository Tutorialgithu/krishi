// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     products: [],
//     singleProduct: null
// }

// export const productSlice = createSlice({
//     name: 'product',
//     initialState,
//     reducers: {
//         setProducts: (state, action) => {
//             state.products = action.payload
//         },
//         setSingleProduct: (state, action) => {
//             state.singleProduct = action.payload
//         },
//     }
//     })


// export const { setProducts , setSingleProduct} = productSlice.actions

// export default productSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    singleProduct: null
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setSingleProduct: (state, action) => {
            state.singleProduct = action.payload
        },
    }
})

export const { setProducts, setSingleProduct } = productSlice.actions

export default productSlice.reducer
