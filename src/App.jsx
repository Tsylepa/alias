// App.js
import { useEffect } from "react";
import css from "./App.module.css";
import _ from "lodash";
import words from "./words.json";
import Game from "./components/Game";
import { useDispatch, useSelector } from "react-redux";
import { updateWordsCollection } from "./redux/game/gameSlice";
import Results from "./components/Results";
import Round from "./components/Round";
import Teams from "./components/Teams";
import Menu from "./components/Menu";
import Settings from "./components/Settings";
import GetReady from "./components/GetReady";
import Winner from "./components/Winner";
import useScreen from "./hooks/useScreen";
import { getWordsCollection } from "./redux/game/gameSelectors";

const App = () => {
  const dispatch = useDispatch();
  const shuffledWords = _.shuffle(words);
  const [screen] = useScreen();
  const wordsCollection = useSelector(getWordsCollection);

  useEffect(() => {
    if (wordsCollection.length === 0) {
      dispatch(updateWordsCollection(shuffledWords));
    }
  }, [wordsCollection]);

  return (
    <div className={css.app}>
      {/* <button onClick={() => setScreen("menu")}>Screen</button> */}
      {screen === "game" && <Game />}
      {screen === "results" && <Results />}
      {screen === "round" && <Round />}
      {screen === "teams" && <Teams />}
      {screen === "menu" && <Menu />}
      {screen === "settings" && <Settings />}
      {screen === "getReady" && <GetReady />}
      {screen === "winner" && <Winner />}
    </div>
  );
};

export default App;
