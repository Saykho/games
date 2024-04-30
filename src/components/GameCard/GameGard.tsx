import React from "react";
import {
  Carousel,
  DescriptionsProps,
  Image,
  Table,
  TableProps,
  Typography,
} from "antd";
import { useTranslation } from "react-i18next";
import { Game, Multiplayer } from "../../models";
import styles from "./GameGard.module.scss";

interface GameGardProps {
  game: Game;
}

export const GameGard: React.FC<GameGardProps> = ({ game }) => {
  const { t } = useTranslation();

  const columns: TableProps<Multiplayer & { id: number }>["columns"] = [
    {
      title: t("gameCard.offline"),
      dataIndex: "offline",
    },
    {
      title: t("gameCard.online"),
      dataIndex: "online",
    },
  ];

  const params: DescriptionsProps["items"] = [
    {
      label: t("gameCard.title"),
      children: game.title,
    },
    {
      label: t("gameCard.rating"),
      children: game.rating,
    },
    {
      label: t("gameCard.platform"),
      children: game.platform.join(", "),
    },
    {
      label: t("gameCard.language"),
      children: game.language.map((l) => t(`language.${l}`)).join(", "),
    },
    {
      label: t("gameCard.multiplayer"),
      children: (
        <Table
          rowKey="id"
          pagination={false}
          size="small"
          columns={columns}
          dataSource={[
            {
              ...game.multiplayer,
              id: 1,
            },
          ]}
        />
      ),
    },
  ];

  return (
    <div className={styles.card}>
      <Image
        width={200}
        src={`/mockScreenshots/${game.coverImage}`}
        alt={game.title}
        className={styles.avatar}
      />

      <Carousel autoplay className={styles.carousel}>
        {game.screenshots.map((s) => (
          <div key={s}>
            <Image
              height={200}
              src={`/mockScreenshots/${s}`}
              alt="Screenshots"
            />
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
