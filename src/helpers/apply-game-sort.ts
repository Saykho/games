import { Game } from "../models";
import { GameSort } from "../enum";

export function applyGameSort(games: Game[], sort: GameSort): Game[] {
  switch (sort) {
    case GameSort.RatingAsc:
      return games.sort((a, b) => a.rating - b.rating);

    case GameSort.RatingDesc:
      return games.sort((a, b) => b.rating - a.rating);

    case GameSort.Default:
    default:
      return games;
  }
}
