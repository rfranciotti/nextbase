import { createSlice } from '@reduxjs/toolkit';

export interface LeftBarState {
    leftbar: boolean;
}

const initialState: LeftBarState = {
    leftbar: false
};

export const showLeftBarSlice = createSlice({
    name: 'showleftbar',
    initialState,
    reducers: {
        show: (state) => {
            state.leftbar = true;
        },
        noshow: (state) => {
            state.leftbar = false;
        },

    },
});

export const { show, noshow } = showLeftBarSlice.actions;

export default showLeftBarSlice.reducer;