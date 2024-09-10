import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'grt',
    initialState: {
        showGPTSearchView: false,
    },
    reducers: {
        toggleGPTSeachView: (state,action) => {
            state.showGPTSearchView = !state.showGPTSearchView
        }
    }
})

export const {toggleGPTSeachView} = gptSlice.actions;
export default gptSlice.reducer;