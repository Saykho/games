import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Game } from "../../models";
import { getGames } from "../async-actions";
import { StateStatus } from "../../enum";

interface GamesState {
    games: Game[];
    status: StateStatus;
    error: string | null;
}

const initialState: GamesState = {
    games: [],
    status: StateStatus.idle,
    error: null,
};

export const gamesSlice = createSlice({
    name: "games",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGames.pending, (state) => ({
            ...state,
            error: null,
            status: StateStatus.loading,
        }));
        builder.addCase(getGames.fulfilled, (state, { payload }) => ({
            ...state,
            status: StateStatus.idle,
            games: payload,
        }));
        builder.addCase(getGames.rejected, (state, { payload }) => {
            if (payload) {
                return {
                    ...state,
                    error: payload.message,
                };
            }
            return {
                ...state,
                status: StateStatus.idle,
            };
        });
    },
});

type WithGamesState = {
    games: GamesState;
};

export const gamesStateSelector = (
    state: WithGamesState,
): GamesState => state.games;

export const getGamesInfoSelector = createSelector(
    gamesStateSelector,
    (state) => {
        return state.games;
    },
);

export default gamesSlice.reducer;
