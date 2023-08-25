import useScreen from "../../hooks/useScreen";
import PropTypes from "prop-types";

export default function ScreenButton({ screen, text, onClick }) {
  const [, setScreen] = useScreen();

  function handleClick() {
    setScreen(screen);
    onClick();
  }

  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

ScreenButton.propTypes = {
  screen: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
