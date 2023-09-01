import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTeam: 0,
  currentGame: false,
  time: 90,
  playing: false,
  timeIsUp: true,
  wordsCollection: [],
  screen: "menu",
  language: "en",
  currentGame: null,
  teams: [
    { id: 1, name: "Team One", score: 0 },
    { id: 2, name: "Team Two", score: 0 },
  ],
  modal: false,
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
    updateWordsCollection(state, action) {
      state.wordsCollection = action.payload;
    },
    updateRoundResults(state, action) {
      state.roundResults = action.payload;
    },
    switchScreen(state, action) {
      state.screen = action.payload;
    },
    newGame(state) {
      state.teams = initialState.teams;
      state.wordsCollection = initialState.wordsCollection;
      state.currentTeam = initialState.currentTeam;
      state.currentGame = initialState.currentGame;
    },
    saveSettings(state, action) {
      return { ...state, ...action.payload };
    },
    setCurrentGame(state, action) {
      state.currentGame = action.payload;
    },
    showModal(state, action) {
      state.modal = action.payload;
    },
    updateCategory(state, action) {
      state.category = action.payload;
    },
    updateLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const {
  updateIsPlaying,
  updateTeams,
  updateCurrentTeam,
  updateTimeIsUp,
  updateWordsCollection,
  updateRoundResults,
  updateCategory,
  updateLanguage,
  switchScreen,
  newGame,
  saveSettings,
  setCurrentGame,
  showModal,
} = gameSlice.actions;
