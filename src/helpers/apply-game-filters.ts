import { Game } from "../models";
import { Language, Platform } from "../enum";

export function applyGameFilters(
  games: Game[],
  filters: {
    languages: Language[];
    platforms: Platform[];
  },
): Game[] {
  const languages = filters.languages ?? [];
  const filteredByLanguages = games.filter((g) =>
    languages.length > 0 ? g.language.some((l) => languages.includes(l)) : true,
  );

  const platforms = filters.platforms ?? [];
  const filteredByPlatforms = filteredByLanguages.filter((g) =>
    platforms.length > 0 ? g.platform.some((p) => platforms.includes(p)) : true,
  );

  return filteredByPlatforms;
}
