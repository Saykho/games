import { createAsyncThunk } from "@reduxjs/toolkit";
import { Game } from "../../models";
import { GamesService } from "../../services";

interface GetGamesError {
  message: string;
}

export const getGames = createAsyncThunk<
  Game[],
  undefined,
  { rejectValue: GetGamesError }
>("getGames", async (_, thunkAPI) => {
  try {
    return await GamesService.getGames();
  } catch (e: any) {
    return thunkAPI.rejectWithValue({
      message: e.message,
    });
  }
});
