import React from "react";
import { Card, Typography } from "antd";
import { Game } from "../../models";

interface GameGardProps {
  game: Game;
}

export const GameGard: React.FC<GameGardProps> = ({ game }) => {
  return (
    <Card hoverable cover={<img src={game.coverImage} alt={game.title} />}>
      <Typography.Text>{game.title}</Typography.Text>
      <Typography.Text>{game.rating}</Typography.Text>
      {game.platform.map((p) => (
        <Typography.Text key={p}>{p}</Typography.Text>
      ))}
    </Card>
  );
};
