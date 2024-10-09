import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
    choiced: number;
}

const initialState: ThemeState = {
    choiced: 0
};

export const menuChoicedSlice = createSlice({
    name: 'menuchoiced',
    initialState,
    reducers: {
        setChoiced: (state, action) => {
            state.choiced = action.payload;  // Ação para definir o tema diretamente
        }
    },
});

export const { setChoiced } = menuChoicedSlice.actions;
export default menuChoicedSlice.reducer;