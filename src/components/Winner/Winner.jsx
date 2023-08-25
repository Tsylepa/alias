import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "src/redux/game/gameSelectors";
import ScreenButton from "src/components/ScreenButton";
import { useEffect } from "react";
import { newGame } from "src/redux/game/gameSlice";

export default function Winner() {
  const dispatch = useDispatch();
  const teams = useSelector(getTeams);

  const winner = [...teams].sort((a, b) => b.score - a.score)[0];

  useEffect(() => {
    dispatch(newGame());
  }, [dispatch]);

  return (
    <>
      <h2>Congratulations!</h2>
      <h2>{winner.name}</h2>
      <ScreenButton screen="menu" text="Menu" />
    </>
  );
}
