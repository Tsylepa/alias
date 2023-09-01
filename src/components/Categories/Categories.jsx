import { useDispatch, useSelector } from "react-redux";
import useScreen from "src/hooks/useScreen";
import getWords from "src/utils/getWords";
import { updateWordsCollection } from "src/redux/game/gameSlice";
import { getLanguage } from "src/redux/game/gameSelectors";
import translation from "src/utils/translation";
import css from "./Categories.module.css";
import ScreenButton from "../ScreenButton/ScreenButton";

export default function Categories() {
  const dispatch = useDispatch();
  const [, setScreen] = useScreen();
  const language = useSelector(getLanguage);
  const text = translation();

  function handleCategory(category) {
    const words = getWords(language, category);
    setScreen("settings");
    dispatch(updateWordsCollection(words));
  }

  return (
    <>
      <ScreenButton screen="teams" back>
        {text.back}
      </ScreenButton>
      <button type="button" onClick={() => handleCategory("easy")}>
        {text.easy}
      </button>
      <button type="button" onClick={() => handleCategory("medium")}>
        {text.medium}
      </button>
      <button type="button" onClick={() => handleCategory("hard")}>
        {text.hard}
      </button>
    </>
  );
}
