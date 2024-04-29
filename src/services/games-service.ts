import { Game } from "../models";
import mockGames from "../mocks/games.json";

export class GamesService {
  static getGames(): Promise<Game[]> {
    return new Promise<Game[]>((resolve) => {
      // mock api
      resolve(mockGames as Game[]);
    });
  }
}
