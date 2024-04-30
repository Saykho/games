import { createAction } from "@reduxjs/toolkit";
import { GameSort, Language, Platform } from "../../enum";
import { Multiplayer } from "../../models";

const setFilters = createAction<{
  languages: Language[];
  platforms: Platform[];
  multiplayer: Multiplayer;
}>("GAMES_SET_FILTERS");

const setSort = createAction<{
  sort: GameSort;
}>("GAMES_SET_SORT");

export const GameActions = {
  setFilters,
  setSort,
};
