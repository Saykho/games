import { useTranslation } from "react-i18next";
import { LabelValue } from "../../models";
import { GameSort } from "../../enum";

type ReturnType = {
  gameSorts: LabelValue<GameSort>[];
};

export function useGameSorts(): ReturnType {
  const { t } = useTranslation();
  const values = Object.values(GameSort);

  return {
    gameSorts: values.map((value) => ({
      value,
      label: t(`gameSort.${value}`),
    })),
  };
}
