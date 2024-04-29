import { Language, Platform } from "../enum";
import { Multiplayer } from "./multiplayer";

export interface Game {
  id: number;
  title: string;
  rating: number;
  platform: Platform[];
  multiplayer: Multiplayer;
  language: Language[];
  coverImage: string;
  screenshots: string[];
}
