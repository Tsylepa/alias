import { useDispatch, useSelector } from "react-redux";
import { newGame } from "src/redux/game/gameSlice";
import ScreenButton from "src/components/ScreenButton";
import { getCurrentWord } from "src/redux/game/gameSelectors";

export default function Menu() {
  const dispatch = useDispatch();
  const currentWord = useSelector(getCurrentWord);

  function handleNewGame() {
    dispatch(newGame());
  }

  return (
    <>
      {currentWord !== 0 && (
        <ScreenButton screen="results" text="Continue Game" />
      )}

      <ScreenButton screen="settings" text="New Game" onClick={handleNewGame} />
    </>
  );
}
