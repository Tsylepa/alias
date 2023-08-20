import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWord: 0,
  currentTeam: 0,
  time: 90,
  playing: false,
  timeIsUp: true,
  wordsCollection: [],
  screen: "menu",
  teams: [
    { id: 1, name: "Team One", score: 0 },
    { id: 2, name: "Team Two", score: 0 },
  ],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateIsPlaying(state, action) {
      state.playing = action.payload;
    },
    updateTeams(state, action) {
      state.teams = action.payload;
    },
    updateCurrentTeam(state, action) {
      state.currentTeam = action.payload;
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
    updateRoundResults(state, action) {
      state.roundResults = action.payload;
    },
    switchScreen(state, action) {
      state.screen = action.payload;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const {
  updateIsPlaying,
  updateTeams,
  updateCurrentTeam,
  updateTimeIsUp,
  updateCurrentWord,
  updateWordsCollection,
  updateRoundResults,
  switchScreen,
} = gameSlice.actions;
