import { Game, Multiplayer } from "../models";
import { Language, Platform } from "../enum";

export function applyGameFilters(
  games: Game[],
  filters: {
    languages: Language[];
    platforms: Platform[];
    multiplayer: Multiplayer;
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

  const multiplayer = filters.multiplayer ?? {
    online: 0,
    offline: 0,
  };

  const filteredByMultiplayer = filteredByPlatforms.filter(
    (g) =>
      multiplayer.offline <= g.multiplayer.offline &&
      multiplayer.online <= g.multiplayer.online,
  );

  return filteredByMultiplayer;
}
