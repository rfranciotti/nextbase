import { configureStore } from '@reduxjs/toolkit';

import leftBarReducer from './reducer-leftbar';
import themeReducer from './reducer-theme';
import choicedReducer from './reducer-menuchoiced';
import formReducer from './reducer-formname';
import settingsReducer from './reducer-settings';



export const store = configureStore({
    reducer: {
        leftbarstate: leftBarReducer,
        themestate: themeReducer,  // Adicione o reducer do tema ao store
        menuchoiced: choicedReducer,  // Adicione o reducer do menu
        formChoiced: formReducer,  // Adicione o reducer do form
        settingsApp: settingsReducer,  // Adicione o reducer do form
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;