import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Game, Multiplayer } from "../../models";
import { getGames } from "../async-actions";
import { GameSort, Language, Platform, StateStatus } from "../../enum";
import { GameActions } from "../actions";
import { applyGameFilters, applyGameSort } from "../../helpers";

interface GamesState {
  allGames: Game[];
  games: Game[];
  gameFilters: {
    languages: Language[];
    platforms: Platform[];
    multiplayer: Multiplayer;
  };
  gameSort: GameSort;

  status: StateStatus;
  error: string | null;
}

const initialState: GamesState = {
  allGames: [],
  games: [],
  gameFilters: {
    languages: [],
    platforms: [],
    multiplayer: {
      offline: 0,
      online: 0,
    },
  },
  gameSort: GameSort.Default,

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
      games: applyGameSort(
        applyGameFilters(payload, state.gameFilters),
        state.gameSort,
      ),
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
      games: applyGameSort(
        applyGameFilters(state.allGames, payload),
        state.gameSort,
      ),
    }));
    builder.addCase(GameActions.setSort, (state, { payload }) => ({
      ...state,
      gameSort: payload.sort,
      games: applyGameSort(
        applyGameFilters(state.allGames, state.gameFilters),
        payload.sort,
      ),
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

export const getGameFiltersSelector = createSelector(
  gamesStateSelector,
  (state) => {
    return state.gameFilters;
  },
);

export const getGameSortSelector = createSelector(
  gamesStateSelector,
  (state) => {
    return state.gameSort;
  },
);

export default gamesSlice.reducer;
