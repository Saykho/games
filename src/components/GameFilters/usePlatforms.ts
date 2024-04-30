import { Platform } from "../../enum";
import { LabelValue } from "../../models";

type ReturnType = {
  platforms: LabelValue<Platform>[];
};

export function usePlatforms(): ReturnType {
  const values = Object.values(Platform);

  return {
    platforms: values.map((value) => ({
      value,
      label: value,
    })),
  };
}
