import Timer from "./Timer";
import Card from "./Card";
import { useState, useEffect } from "react";
import { updateCurrentWord, updateIsPlaying } from "src/redux/game/gameSlice";
import {
  getCurrentWord,
  getTimeIsUp,
  getScreen,
} from "src/redux/game/gameSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getWordsCollection } from "../../redux/game/gameSelectors";
import {
  switchScreen,
  updateWordsCollection,
} from "../../redux/game/gameSlice";

const Game = () => {
  const dispatch = useDispatch();
  const timeIsUp = useSelector(getTimeIsUp);
  const wordsCollection = useSelector(getWordsCollection);
  const screen = useSelector(getScreen);

  const [round, setRound] = useState({ words: [], score: 0 });

  function handleNextWord(guessed) {
    const words = round.words;
    const updatedCollection = [...wordsCollection];

    updatedCollection.shift();

    words.push({ word: wordsCollection[0], guessed });

    dispatch(updateWordsCollection(updatedCollection));

    setRound((prev) => ({ ...prev, words }));

    if (timeIsUp) {
      dispatch(updateIsPlaying(false));
      dispatch(switchScreen("round-results"));
    }
  }

  return screen === "round-results" ? (
    <>
      {round.words.map(({ word, guessed }) => (
        <div key={word}>
          <p>{word}</p>
          <p>{guessed ? "+" : "-"}</p>
        </div>
      ))}
      <p>Score:</p>
      <p>
        {round.words.reduce(
          (acc, { guessed }) => (guessed ? acc + 1 : acc - 1),
          0
        )}
      </p>
    </>
  ) : (
    <>
      <Timer />
      <button type="button" onClick={() => handleNextWord(false)}>
        Miss
      </button>
      <Card />
      <button type="button" onClick={() => handleNextWord(true)}>
        Guessed
      </button>
    </>
  );
};

export default Game;
