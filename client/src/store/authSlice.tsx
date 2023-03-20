import { createSlice } from "@reduxjs/toolkit";

interface ObjectArray {
    [index: number]: Record<string, unknown>;
  }
  

interface authState {
    favoriteJobs: Array<ObjectArray>
}

const initialState: authState = {
    favoriteJobs: []
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action){}
    }
})

export const authActions = authSlice.actions;

export default authSlice;