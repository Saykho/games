import React from "react";
import { Carousel, DescriptionsProps, Typography } from "antd";
import { Game } from "../../models";

import styles from "./GameGard.module.scss";

interface GameGardProps {
  game: Game;
}

export const GameGard: React.FC<GameGardProps> = ({ game }) => {
  const params: DescriptionsProps["items"] = [
    {
      label: "Title",
      children: game.title,
    },
    {
      label: "Rating",
      children: game.rating,
    },
    {
      label: "Platform",
      children: game.platform.join(", "),
    },
    {
      label: "Language",
      children: game.language.join(", "),
    },
  ];

  return (
    <div className={styles.card}>
      <img
        src={`/mockScreenshots/${game.coverImage}`}
        alt={game.title}
        className={styles.avatar}
      />

      <Carousel autoplay className={styles.carousel}>
        {game.screenshots.map((s) => (
          <div key={s} className={styles.cardCarousel}>
            <img key={s} src={`/mockScreenshots/${s}`} alt="Screenshots" />
          </div>
        ))}
      </Carousel>

      <div className={styles.params}>
        {params.map((p) => (
          <div key={p.label as string}>
            <Typography.Text className={styles.param}>
              <span className={styles.paramName}>{p.label}:</span>
              {p.children}
            </Typography.Text>
          </div>
        ))}
      </div>
    </div>
  );
};
