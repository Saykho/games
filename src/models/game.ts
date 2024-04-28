export interface Game {
  id: number;
  title: string;
  rating: number;
  platform: string[];
  multiplayer: {
    offline: number;
    online: number;
  };
  language: string[];
  coverImage: string;
  screenshots: string[];
}
