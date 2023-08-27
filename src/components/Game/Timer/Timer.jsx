import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateIsPlaying,
  updateTimeIsUp,
  showModal,
} from "src/redux/game/gameSlice";
import { getTime } from "src/redux/game/gameSelectors";
import { LuTimer } from "react-icons/lu";
import { getModal } from "src/redux/game/gameSelectors";
import PauseMenu from "../PauseMenu";
import Modal from "src/components/Modal";
import { BsPauseCircleFill } from "react-icons/bs";
import css from "./Timer.module.css";

const Timer = () => {
  const dispatch = useDispatch();
  const time = useSelector(getTime);
  const paused = useSelector(getModal);

  const [countdown, setCountdown] = useState(time);

  useEffect(() => {
    dispatch(updateTimeIsUp(false));
    dispatch(updateIsPlaying(true));
  }, [dispatch]);

  useEffect(() => {
    let interval;

    if (!paused) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    if (countdown <= 0) {
      dispatch(updateTimeIsUp(true));
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [countdown, dispatch, paused]);

  function handlePause() {
    dispatch(showModal(true));
  }

  return (
    <div className={css.container}>
      <button type="button" onClick={handlePause} className={css.pause}>
        <BsPauseCircleFill />
      </button>

      <div className={css.time}>
        <LuTimer />
        <p>{countdown}&quot;</p>
      </div>

      {paused && (
        <Modal title="Paused">
          <PauseMenu />
        </Modal>
      )}
    </div>
  );
};

export default Timer;
