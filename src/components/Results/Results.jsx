import { useSelector } from "react-redux";
import {
  getTeams,
  getWinScore,
  getCurrentTeam,
} from "src/redux/game/gameSelectors";
import useScreen from "src/hooks/useScreen";
import { useEffect, useState } from "react";
import ScreenButton from "../ScreenButton/ScreenButton";

export default function Results() {
  const teams = useSelector(getTeams);
  const winScore = useSelector(getWinScore);
  const cuurrentTeam = useSelector(getCurrentTeam);

  const [, setScreen] = useScreen();
  const [winner, setWinner] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const hasWinner = teams.some((team) => team.score >= winScore);
    console.log("hasWinner", hasWinner);

    setWinner(hasWinner);
  }, [teams, winScore]);

  useEffect(() => {
    console.log(cuurrentTeam, teams.length - 1);
    if (winner && cuurrentTeam === 0) {
      setFinished(true);
    }
  }, [winner, cuurrentTeam, teams]);

  useEffect(() => {
    finished && setScreen("winner");
  }, [finished, setScreen]);

  return (
    <>
      <h2>Results</h2>
      <table>
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
