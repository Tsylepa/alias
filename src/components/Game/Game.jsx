import Timer from "./Timer";
import Card from "./Card";
import { useState } from "react";
import { updateIsPlaying } from "src/redux/game/gameSlice";
import { getTimeIsUp } from "src/redux/game/gameSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getWordsCollection } from "src/redux/game/gameSelectors";
import { switchScreen, updateWordsCollection } from "src/redux/game/gameSlice";
import { updateRoundResults } from "src/redux/game/gameSlice";

const Game = () => {
  const dispatch = useDispatch();
  const timeIsUp = useSelector(getTimeIsUp);
  const wordsCollection = useSelector(getWordsCollection);
  const [results, setResults] = useState([]);

  function handleNextWord(guessed) {
    const updatedCollection = [...wordsCollection];

    console.log(results);
    updatedCollection.shift();
    setResults([...results, { word: wordsCollection[0], guessed }]);

    dispatch(updateWordsCollection(updatedCollection));

    if (timeIsUp) {
      dispatch(updateIsPlaying(false));
      dispatch(updateRoundResults(results));
      dispatch(switchScreen("round"));
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
