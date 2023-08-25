import { useDispatch, useSelector } from "react-redux";
import css from "./Results.module.css";
import {
  getTeams,
  getWinScore,
  getCurrentTeam,
} from "src/redux/game/gameSelectors";
import useScreen from "src/hooks/useScreen";
import { useEffect, useState } from "react";
import ScreenButton from "../ScreenButton/ScreenButton";
import { setCurrentGame } from "../../redux/game/gameSlice";

export default function Results() {
  const dispatch = useDispatch();
  const teams = useSelector(getTeams);
  const winScore = useSelector(getWinScore);
  const cuurrentTeam = useSelector(getCurrentTeam);

  const [, setScreen] = useScreen();
  const [winner, setWinner] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const hasWinner = teams.some((team) => team.score >= winScore);
    setWinner(hasWinner);
  }, [teams, winScore]);

  useEffect(() => {
    if (winner && cuurrentTeam === 0) {
      setFinished(true);
    }
  }, [winner, cuurrentTeam, teams]);

  useEffect(() => {
    finished && setScreen("winner") && dispatch(setCurrentGame(false));
  }, [finished, setScreen]);

  return (
    <>
      <h2>Results</h2>
      <table className={css.table}>
        <tbody>
          {teams.map((t) => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ScreenButton screen="getReady" text="Continue" />
    </>
  );
}
