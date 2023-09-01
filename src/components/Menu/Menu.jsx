import { useDispatch, useSelector } from "react-redux";
import { newGame } from "src/redux/game/gameSlice";
import ScreenButton from "src/components/ScreenButton";
import { getCurrentGame } from "src/redux/game/gameSelectors";
import LanguageSelector from "./LanguageSelector";
import translation from "src/utils/translation";
import css from "./Menu.module.css";

export default function Menu() {
  const dispatch = useDispatch();
  const currentGame = useSelector(getCurrentGame);
  const text = translation();

  function handleNewGame() {
    dispatch(newGame());
  }

  return (
    <>
      <LanguageSelector />

      <div className={css.buttonsSet}>
        {currentGame && (
          <ScreenButton screen="results">{text.continueGame}</ScreenButton>
        )}

        <ScreenButton screen="teams" onClick={handleNewGame}>
          {text.newGame}
        </ScreenButton>
      </div>
    </>
  );
}
