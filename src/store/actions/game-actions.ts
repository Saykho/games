import { createAction } from "@reduxjs/toolkit";
import { Language, Platform } from "../../enum";

const setFilters = createAction<{
  languages: Language[];
  platforms: Platform[];
}>("GAMES_SET_FILTERS");

export const GameActions = {
  setFilters,
};
