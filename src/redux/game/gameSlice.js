import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWord: 0,
  time: 90,
  playing: false,
  timeIsUp: true,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateIsPlaying(state, action) {
      state.playing = action.payload;
    },
    updateTimeIsUp(state, action) {
      state.timeIsUp = action.payload;
    },
    updateCurrentWord(state, action) {
      state.currentWord = action.payload;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const { updateIsPlaying, updateTimeIsUp, updateCurrentWord } =
  gameSlice.actions;
