import { createSlice } from "@reduxjs/toolkit";

interface ObjectArray {
    [index: number]: Record<string, unknown>;
  }
  
  
interface favoriteState {
    favoriteJobs: Array<ObjectArray>
}

const initialState: favoriteState = {
    favoriteJobs: []
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState
    ,
    reducers: {
        addFavoriteJob(state, action){
            console.log('Payload was:',action.payload)
            state.favoriteJobs.push(action.payload);
            console.log("New favorite added!")
            console.log('State is now:',state.favoriteJobs)
        }
    }
})

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;