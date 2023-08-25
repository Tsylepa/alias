import { useDispatch, useSelector } from "react-redux";
import { switchScreen } from "../redux/game/gameSlice";
import { getScreen } from "../redux/game/gameSelectors";

export default function useScreen() {
  const dispatch = useDispatch();
  const screen = useSelector(getScreen);

  const setScreen = (screen) => {
    dispatch(switchScreen(screen));
  };

  return [screen, setScreen];
}
