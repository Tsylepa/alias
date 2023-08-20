import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateIsPlaying, updateTimeIsUp } from "src/redux/game/gameSlice";

const Timer = () => {
  const dispatch = useDispatch();

  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    dispatch(updateTimeIsUp(false));
    dispatch(updateIsPlaying(true));
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown <= 0) {
      dispatch(updateTimeIsUp(true));
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [countdown, dispatch]);

  return (
    <div>
      <p>{countdown}</p>
    </div>
  );
};

export default Timer;