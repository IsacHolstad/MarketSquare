import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: { // Here is the initial state // = data
        productsInCart: [],
        numberOfProductsInCart: 0
    },
    reducers: { // Here are the functions which amend the state // mutations for state
        ADD_PRODUCT_TO_CART: (state, action) => { // e.g
            console.log("ADD_PRODUCT_TO_CART: action.payload", action.payload);
            state.productsInCart = [...state.productsInCart, action.payload];
            state.numberOfProductsInCart = state.productsInCart.length;
        },
    },
});
export default cartSlice.reducer

// Actions // api calls etc
const {ADD_PRODUCT_TO_CART} = cartSlice.actions


// Add Single Product to Cart
export const addSingleProductToCart = (productData) => async dispatch => {
    console.log("Store productData:", productData)
    dispatch(ADD_PRODUCT_TO_CART(productData));
}
