import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateIsPlaying, updateTimeIsUp } from "src/redux/game/gameSlice";
import { getTime } from "src/redux/game/gameSelectors";
import { LuTimer } from "react-icons/lu";

const Timer = () => {
  const dispatch = useDispatch();
  const time = useSelector(getTime);

  const [countdown, setCountdown] = useState(time);

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
      <LuTimer />
      <p>{countdown}"</p>
    </div>
  );
};

export default Timer;
