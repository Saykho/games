import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { GameSort } from "../../enum";
import { getGameSortSelector } from "../../store/slices";
import { GameActions } from "../../store";

type ReturnType = {
  sort: GameSort;
  setSort: (sort: GameSort) => void;
};

export function useSort(): ReturnType {
  const dispatch = useAppDispatch();
  const sort = useSelector(getGameSortSelector);

  const setSort = (gameSort: GameSort) => {
    dispatch(GameActions.setSort({ sort: gameSort }));
  };

  return {
    sort,
    setSort,
  };
}
