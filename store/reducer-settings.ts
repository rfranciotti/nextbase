import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SettingsState {
    encryptsaldos: string,
    encryptvalues: string,
    encryptcard: string;
}

const initialState: SettingsState = {
    encryptsaldos: '',
    encryptvalues: '',
    encryptcard: ''
};

export const settingsAppSlice = createSlice({
    name: 'settingsApp',
    initialState,
    reducers: {
        setSettings: (state, action: PayloadAction<SettingsState>) => {
            return { ...state, ...action.payload };
        }
    },
});

export const { setSettings } = settingsAppSlice.actions;
export default settingsAppSlice.reducer;