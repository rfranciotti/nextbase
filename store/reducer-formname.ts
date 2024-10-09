import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
    name: string;
}

const initialState: FormState = {
    name: "Home",
};

export const formChoicedSlice = createSlice({
    name: 'formChoiced', // Nome do slice mais consistente
    initialState,
    reducers: {
        setFormName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;  // Ação para definir o nome do form
        },
    },
});

export const { setFormName } = formChoicedSlice.actions;
export default formChoicedSlice.reducer;