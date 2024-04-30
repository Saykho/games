import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Game } from "../../models";
import { getGames } from "../async-actions";
import { Language, StateStatus } from "../../enum";
import { GameActions } from "../actions";
import { applyGameFilters } from "../../components/helpers/apply-game-filters";

interface GamesState {
  allGames: Game[];
  games: Game[];
  gameFilters: {
    languages: Language[];
  };
  status: StateStatus;
  error: string | null;
}

const initialState: GamesState = {
  allGames: [],
  games: [],
  gameFilters: {
    languages: [],
  },
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
      allGames: payload,
      games: applyGameFilters(payload, state.gameFilters),
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
    builder.addCase(GameActions.setFilters, (state, { payload }) => ({
      ...state,
      gameFilters: payload,
      games: applyGameFilters(state.allGames, payload),
    }));
  },
});

type WithGamesState = {
  games: GamesState;
};

export const gamesStateSelector = (state: WithGamesState): GamesState =>
  state.games;

export const getGamesInfoSelector = createSelector(
  gamesStateSelector,
  (state) => {
    return state.games;
  },
);

export default gamesSlice.reducer;
