import { useDispatch } from "react-redux";
import { showModal } from "src/redux/game/gameSlice";
import ScreenButton from "src/components/ScreenButton";

export default function PauseMenu() {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(showModal(false));
  }

  return (
    <>
      <button type="button" onClick={closeModal}>
        Resume
      </button>
      <ScreenButton screen="menu">Quit game</ScreenButton>
    </>
  );
}
