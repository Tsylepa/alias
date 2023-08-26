import useScreen from "../../hooks/useScreen";
import PropTypes from "prop-types";

export default function ScreenButton({ screen, onClick, children, ...props }) {
  const [, setScreen] = useScreen();

  function handleClick() {
    setScreen(screen);
    onClick && onClick();
  }

  return (
    <button type="button" onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

ScreenButton.propTypes = {
  screen: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
