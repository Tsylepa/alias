import { useEffect, useState } from "react";
import "./App.css";
import _ from "lodash";
import words from "./words.json";
import Game from "./components/Game";
import { useDispatch } from "react-redux";
import { switchScreen } from "./redux/game/gameSlice";
import { updateWordsCollection } from "./redux/game/gameSlice";

const App = () => {
  const dispatch = useDispatch();
  const shuffledWords = _.shuffle(words);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(updateWordsCollection(shuffledWords));
    dispatch(switchScreen("round"));
  }, []);

  return <Game />;
};

export default App;
