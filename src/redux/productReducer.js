import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: '',
    product: []
}

const productReducer = createSlice({
    initialState,
    name: 'product',
    extraReducers: {}
});

export default productReducer;