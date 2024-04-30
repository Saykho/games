import { Game } from "../../models";
import { Language } from "../../enum";

export function applyGameFilters(
  games: Game[],
  filters: {
    languages: Language[];
  },
): Game[] {
  const languages = filters.languages ?? [];
  const filteredByLanguages = games.filter((g) =>
    languages.length > 0 ? g.language.some((l) => languages.includes(l)) : true,
  );

  return filteredByLanguages;
}
