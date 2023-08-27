import PropTypes from "prop-types";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { showModal } from "src/redux/game/gameSlice";
import css from "./Modal.module.css";

export default function Modal({ title, children }) {
  const dispatch = useDispatch();

  function closeModal(e) {
    if (e.target.classList.contains(css.modal)) {
      return;
    }
    dispatch(showModal(false));
  }

  return (
    <div className={css.backdrop} onClick={closeModal}>
      <div className={css.modal}>
        <AiFillCloseCircle onClick={closeModal} className={css.close} />
        <h2>{title}</h2>
        <div className={css.content}>{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
