import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice';
import favoriteSlice from './favoriteSlice';


// Define a general store to gather all the stores
const store = configureStore({
    reducer:{
        favorite: favoriteSlice.reducer,
    }
})

export default store;
