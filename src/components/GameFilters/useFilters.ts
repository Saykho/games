import { useSelector } from "react-redux";
import { Language } from "../../enum";
import { getGameFiltersSelector } from "../../store/slices";
import { useAppDispatch } from "../../hooks";
import { GameActions } from "../../store";

type ReturnType = {
  languages: Language[];
  setLanguages: (languages: Language[]) => void;
};

export function useFilters(): ReturnType {
  const dispatch = useAppDispatch();
  const filters = useSelector(getGameFiltersSelector);
  const setLanguages = (languages: Language[]) => {
    dispatch(GameActions.setFilters({ ...filters, languages }));
  };

  return {
    languages: filters.languages,
    setLanguages,
  };
}
