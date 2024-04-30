import { useSelector } from "react-redux";
import { Language, Platform } from "../../enum";
import { getGameFiltersSelector } from "../../store/slices";
import { useAppDispatch } from "../../hooks";
import { GameActions } from "../../store";
import { Multiplayer } from "../../models";

type ReturnType = {
  languages: Language[];
  setLanguages: (languages: Language[]) => void;
  platforms: Platform[];
  setPlatforms: (platforms: Platform[]) => void;
  multiplayer: Multiplayer;
  setMultiplayer: (multiplayer: Multiplayer) => void;
};

export function useFilters(): ReturnType {
  const dispatch = useAppDispatch();
  const filters = useSelector(getGameFiltersSelector);
  const setLanguages = (languages: Language[]) => {
    dispatch(GameActions.setFilters({ ...filters, languages }));
  };

  const setPlatforms = (platforms: Platform[]) => {
    dispatch(GameActions.setFilters({ ...filters, platforms }));
  };

  const setMultiplayer = (multiplayer: Multiplayer) => {
    dispatch(GameActions.setFilters({ ...filters, multiplayer }));
  };

  return {
    languages: filters.languages,
    setLanguages,

    platforms: filters.platforms,
    setPlatforms,

    multiplayer: filters.multiplayer,
    setMultiplayer,
  };
}
