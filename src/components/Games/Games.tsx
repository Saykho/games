import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { getGamesInfoSelector } from "../../store/slices";
import { getGames } from "../../store";
import { GameGard } from "../GameCard";
import styles from "./Games.module.scss";
import { GameFilters } from "../GameFilters";

export const Games: React.FC = () => {
  const dispatch = useAppDispatch();
  const games = useSelector(getGamesInfoSelector);

  useEffect(() => {
    dispatch(getGames());
  }, []);

  return (
    <div className={styles.games}>
      <GameFilters />
      {games.map((game) => (
        <GameGard game={game} key={game.id} />
      ))}
    </div>
  );
};
