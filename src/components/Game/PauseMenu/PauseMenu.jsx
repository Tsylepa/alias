import { useDispatch } from "react-redux";
import { showModal } from "src/redux/game/gameSlice";
import ScreenButton from "src/components/ScreenButton";
import translation from "src/utils/translation";

export default function PauseMenu() {
  const dispatch = useDispatch();
  const text = translation();

  function closeModal() {
    dispatch(showModal(false));
  }

  return (
    <>
      <button type="button" onClick={closeModal}>
        {text.resume}
      </button>
      <ScreenButton screen="menu">{text.quit}</ScreenButton>
    </>
  );
}
