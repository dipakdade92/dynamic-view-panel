import { configureStore, createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        menu: [],
        currentApp: null,
        defaultMenuVerison: null,
        users: [],
    },
    reducers: {
        loadApp: (state, action) => {
            state.currentApp = action.payload.app;
            state.menu = action.payload.menu;
            state.defaultMenuVerison = action.payload.defaultMenuVerison;
        },
        addUser: (state, action) => {
            state.users = [...state.users, action.payload];
        },
    },
});

export const { loadApp, addUser } = appSlice.actions;

const store = configureStore({
    reducer: {
        app: appSlice.reducer,
    },
});

export default store;
