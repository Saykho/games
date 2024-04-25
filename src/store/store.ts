import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./slices/game-slice";

export const store = configureStore({
    reducer: {
        games: gamesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
