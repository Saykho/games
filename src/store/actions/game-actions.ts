import { createAction } from "@reduxjs/toolkit";
import { Language } from "../../enum";

const setFilters = createAction<{
  languages: Language[];
}>("GAMES_SET_FILTERS");

export const GameActions = {
  setFilters,
};
