import Timer from "./Timer";
import Card from "./Card";
import { useEffect, useState } from "react";
import { updateIsPlaying } from "src/redux/game/gameSlice";
import { getTimeIsUp } from "src/redux/game/gameSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getWordsCollection } from "src/redux/game/gameSelectors";
import { updateWordsCollection } from "src/redux/game/gameSlice";
import { updateRoundResults } from "src/redux/game/gameSlice";
import useScreen from "src/hooks/useScreen";
import { setCurrentGame } from "src/redux/game/gameSlice";

const Game = () => {
  const dispatch = useDispatch();
  const timeIsUp = useSelector(getTimeIsUp);
  const wordsCollection = useSelector(getWordsCollection);
  const [results, setResults] = useState([]);
  const [, setScreen] = useScreen();

  useEffect(() => {
    dispatch(setCurrentGame(true));
  }, []);

  function handleNextWord(guessed) {
    const updatedCollection = [...wordsCollection];

    console.log(results);
    updatedCollection.shift();
    setResults([...results, { word: wordsCollection[0], guessed }]);

    dispatch(updateWordsCollection(updatedCollection));

    if (timeIsUp) {
      dispatch(updateIsPlaying(false));
      dispatch(updateRoundResults(results));
      setScreen("round");
    }
  }

  return (
    <>
      <Timer />
      <button type="button" onClick={() => handleNextWord(false)}>
        Dismiss
      </button>
      <Card />
      <button type="button" onClick={() => handleNextWord(true)}>
        Guessed
      </button>
    </>
  );
};

export default Game;
