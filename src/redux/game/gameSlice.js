import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWord: 0,
  time: 90,
  playing: false,
  timeIsUp: true,
  wordsCollection: null,
  screen: "menu",
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
    updateWordsCollection(state, action) {
      state.wordsCollection = action.payload;
    },
    switchScreen(state, action) {
      state.screen = action.payload;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const {
  updateIsPlaying,
  updateTimeIsUp,
  updateCurrentWord,
  updateWordsCollection,
  switchScreen,
} = gameSlice.actions;
