import { useDispatch, useSelector } from "react-redux";
import useScreen from "src/hooks/useScreen";
import getWords from "src/utils/getWords";
import { updateWordsCollection } from "src/redux/game/gameSlice";
import { getLanguage } from "src/redux/game/gameSelectors";
import translation from "src/utils/translation";
import ScreenButton from "../ScreenButton/ScreenButton";
import { updateCategory } from "../../redux/game/gameSlice";

export default function Categories() {
  const dispatch = useDispatch();
  const [, setScreen] = useScreen();
  const language = useSelector(getLanguage);
  const text = translation();

  async function handleCategory(category) {
    const words = await getWords(language, category);
    dispatch(updateWordsCollection(words));

    setScreen("settings");
    dispatch(updateWordsCollection(words));
    dispatch(updateCategory(category));
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
