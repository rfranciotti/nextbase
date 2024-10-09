import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
    themeName: 'light' | 'dark' | 'colorful' | 'blue';
}

const initialState: ThemeState = {
    themeName: 'dark'  // Define o tema inicial
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        getname: (state) => {
            state.themeName = state.themeName || 'dark';
        },
        setTheme: (state, action) => {
            state.themeName = action.payload;  // Ação para definir o tema diretamente
        }
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;