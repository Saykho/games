import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Flex } from "antd";
import { useAppDispatch } from "../../hooks";
import { getGamesInfoSelector } from "../../store/slices";
import { getGames } from "../../store/async-actions";
import { GameGard } from "../GameCard";

export const Games: React.FC = () => {
  const dispatch = useAppDispatch();
  const games = useSelector(getGamesInfoSelector);
  console.log(games);

  useEffect(() => {
    dispatch(getGames());
  }, []);

  return (
    <Flex wrap="wrap">
      {games.map((game) => (
        <GameGard game={game} key={game.id} />
      ))}
    </Flex>
  );
};
