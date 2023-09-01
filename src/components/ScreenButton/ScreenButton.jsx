import useScreen from "src/hooks/useScreen";
import PropTypes from "prop-types";
import { IoIosArrowBack } from "react-icons/io";
export default function ScreenButton({
  screen,
  onClick,
  children,
  back,
  ...props
}) {
  const [, setScreen] = useScreen();

  function handleClick() {
    setScreen(screen);
    onClick && onClick();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      {...props}
      style={back && { alignSelf: "flex-start" }}>
      {back && <IoIosArrowBack />}
      {children}
    </button>
  );
}

ScreenButton.propTypes = {
  screen: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  back: PropTypes.bool,
};
