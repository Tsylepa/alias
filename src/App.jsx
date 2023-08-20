import { useEffect } from "react";
import "./App.css";
import _ from "lodash";
import words from "./words.json";
import Game from "./components/Game";
import { useDispatch, useSelector } from "react-redux";
import { switchScreen } from "./redux/game/gameSlice";
import { updateWordsCollection } from "./redux/game/gameSlice";
import { getScreen } from "./redux/game/gameSelectors";
import Results from "./components/Results";
import Round from "./components/Round";
import Teams from "./components/Teams";

const App = () => {
  const dispatch = useDispatch();
  const shuffledWords = _.shuffle(words);
  const screen = useSelector(getScreen);

  useEffect(() => {
    dispatch(updateWordsCollection(shuffledWords));
  }, [dispatch, shuffledWords]);
  return (
    <>
      <button onClick={() => dispatch(switchScreen("teams"))}>Screen</button>
      {screen === "game" && <Game />}
      {screen === "results" && <Results />}
      {screen === "round" && <Round />}
      {screen === "teams" && <Teams />}
    </>
  );
};

export default App;
