import Timer from "./Timer";
import Card from "./Card";
import { useState, useEffect } from "react";
import { updateCurrentWord, updateIsPlaying } from "src/redux/game/gameSlice";
import { getCurrentWord, getTimeIsUp } from "src/redux/game/gameSelectors";
import { useDispatch, useSelector } from "react-redux";

const Game = () => {
  const dispatch = useDispatch();
  const word = useSelector(getCurrentWord);
  const timeIsUp = useSelector(getTimeIsUp);

  // const [round, setRound] = useState(null);

  const [currentWord, setCurrentWord] = useState(word);

  useEffect(() => {
    dispatch(updateCurrentWord(currentWord));
  }, [currentWord]);

  function handleNextWord() {
    timeIsUp
      ? dispatch(updateIsPlaying(false))
      : setCurrentWord((prev) => prev + 1);
  }

  function handleMissed() {
    handleNextWord();
  }

  function handleGuessed() {
    handleNextWord();
  }

  return (
    <>
      <Timer />
      <button type="button" onClick={handleMissed}>
        Miss
      </button>
      <Card />
      <button type="button" onClick={handleGuessed}>
        Guessed
      </button>
    </>
  );
};

export default Game;
