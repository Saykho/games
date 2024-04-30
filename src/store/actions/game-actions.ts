import { createAction } from "@reduxjs/toolkit";
import { Language, Platform } from "../../enum";
import { Multiplayer } from "../../models";

const setFilters = createAction<{
  languages: Language[];
  platforms: Platform[];
  multiplayer: Multiplayer;
}>("GAMES_SET_FILTERS");

export const GameActions = {
  setFilters,
};
