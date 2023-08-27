import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateIsPlaying,
  updateWordsCollection,
  updateRoundResults,
  setCurrentGame,
} from "src/redux/game/gameSlice";
import { getTimeIsUp, getWordsCollection } from "src/redux/game/gameSelectors";
import useScreen from "src/hooks/useScreen";
import Timer from "./Timer";
import Card from "./Card";
import css from "./Game.module.css";

const Game = () => {
  const dispatch = useDispatch();
  const timeIsUp = useSelector(getTimeIsUp);
  const wordsCollection = useSelector(getWordsCollection);
  const [results, setResults] = useState([]);
  const [finish, setFinish] = useState(false);
  const [, setScreen] = useScreen();

  useEffect(() => {
    dispatch(setCurrentGame(true));
  }, []);

  useEffect(() => {
    if (finish) {
      dispatch(updateIsPlaying(false));
      dispatch(updateRoundResults(results));
      setScreen("round");
    }
  }, [results, finish]);

  function handleNextWord(guessed) {
    const updatedCollection = [...wordsCollection];
    updatedCollection.shift();

    const newResult = { word: wordsCollection[0], guessed };
    setResults((prevResults) => [...prevResults, newResult]);
    dispatch(updateWordsCollection(updatedCollection));

    if (timeIsUp) {
      setFinish(true);
    }
  }

  return (
    <div className={css.screen}>
      <Timer />

      <button type="button" onClick={() => handleNextWord(true)}>
        Guessed
      </button>

      <Card />

      <button type="button" onClick={() => handleNextWord(false)}>
        Dismiss
      </button>
    </div>
  );
};

export default Game;
