import { useState, useEffect, useRef } from "react";
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
import Draggable from "react-draggable";
import translation from "src/utils/translation";

const Game = () => {
  const dispatch = useDispatch();
  const timeIsUp = useSelector(getTimeIsUp);
  const nodeRef = useRef(null);
  const wordsCollection = useSelector(getWordsCollection);
  const [results, setResults] = useState([]);
  const [finish, setFinish] = useState(false);
  const [, setScreen] = useScreen();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const text = translation();

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
    setDragging(false);
    setDisabled(true);

    resetPosition();

    const updatedCollection = [...wordsCollection];
    updatedCollection.shift();

    const newResult = { word: wordsCollection[0], guessed };
    setResults((prevResults) => [...prevResults, newResult]);
    dispatch(updateWordsCollection(updatedCollection));

    if (timeIsUp) {
      setFinish(true);
    }
  }

  const handleDrag = (_, data) => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    if (!dragging) return;
    setPosition({ x: 0, y: data.y });

    if (data.y > 150) {
      handleNextWord(false);
    }

    if (data.y < -150) {
      handleNextWord(true);
    }
  };
  function handleStart() {
    setDragging(true);
    setDisabled(false);
  }

  function handleStop() {
    resetPosition();
    setDisabled(false);
  }

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className={css.screen}>
      <Timer />

      <button type="button" onClick={() => handleNextWord(true)}>
        {text.guessed}
      </button>

      <Draggable
        axis="y"
        defaultPosition={{ x: 0, y: 0 }}
        position={position}
        grid={[1, 1]}
        scale={1}
        disabled={disabled}
        onStart={handleStart}
        onStop={handleStop}
        onDrag={handleDrag}
        nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <Card />
        </div>
      </Draggable>

      <button type="button" onClick={() => handleNextWord(false)}>
        {text.dismiss}
      </button>
    </div>
  );
};

export default Game;
