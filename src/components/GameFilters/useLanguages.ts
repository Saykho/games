import { useTranslation } from "react-i18next";
import { Language } from "../../enum";
import { LabelValue } from "../../models";

type ReturnType = {
  languages: LabelValue<Language>[];
};

export function useLanguages(): ReturnType {
  const { t } = useTranslation();
  const values = Object.values(Language);

  return {
    languages: values.map((value) => ({
      value,
      label: t(`language.${value}`),
    })),
  };
}
