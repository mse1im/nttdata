import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../common/api";

const initialState = {
    loading: false,
    error: '',
    product: [],
    loadNumber: 1,
    likedProducts: [],
    getLikedProduct: false,
    finished: false,
    allProducts: []
}

export const getProduct = createAsyncThunk("getdata",async () => {
    const { data } = await request.get("https://honey-badgers-ecommerce.glitch.me/products");
    return data;
})

const productReducer = createSlice({
    initialState,
    name: 'product',
    extraReducers: builder => {
        builder.addCase(getProduct.pending,state => {
            state.loading = true;
        });
        builder.addCase(getProduct.fulfilled,(state,{payload}) => {
            state.loading = false;
            state.allProducts = payload;
            let newState = payload.filter((product,index) => index < (4*state.loadNumber) && product);
            if(state.product.some(item => item.like)){
                newState = newState.map((product,index) => {
                    return {...product, like: state.product[index]?.like ?? false}
                })
            }else {
                newState = newState.map(product => {
                    return {...product,like:false}
                });
            }
            state.product = newState;
            if(state.product.length === payload.length){
                state.finished = true;
            }
        });
        builder.addCase(getProduct.rejected,(state,{payload}) => {
            state.loading = false;
            state.error = payload;
        })
    },
    reducers: {
        setLoad(state,{payload}){
            state.loadNumber += payload;
        },
        setLike(state,{payload}){
            const status = state.likedProducts.findIndex(product => product.id === payload.id);
            if(status !== -1){
                state.likedProducts.splice(status,1);
            }else {
                state.likedProducts.push(payload);
            }
            state.product = state.product.map(item => {
                if(item.id === payload.id){
                    item.like = !item.like;
                }
                return item;
            })

            // For Mobile Swiper Start
            state.allProducts = state.allProducts.map(item => {
                if(item.id === payload.id){
                    item.like = !item.like;
                }
                return item;
            });
            // For Mobile Swiper End
        },
        getLike(state,{payload}){
            state.getLikedProduct = payload;
        }
    }
});

export default productReducer.reducer;
export const { setLoad,setLike,getLike } = productReducer.actions;