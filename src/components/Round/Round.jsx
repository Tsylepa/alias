import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRoundResults,
  getCurrentTeam,
  getTeams,
} from "src/redux/game/gameSelectors";
import { updateTeams, updateCurrentTeam } from "src/redux/game/gameSlice";
import ScreenButton from "src/components/ScreenButton";

export default function Round() {
  const dispatch = useDispatch();
  const currentTeam = useSelector(getCurrentTeam);
  const words = useSelector(getRoundResults);
  const teams = useSelector(getTeams);

  const score = words.reduce(
    (acc, { guessed }) => (guessed ? acc + 1 : acc - 1),
    0
  );

  useEffect(() => {
    dispatch(
      updateTeams(
        teams.map((team, index) =>
          index === currentTeam ? { ...team, score: team.score + score } : team
        )
      )
    );

    dispatch(
      updateCurrentTeam(currentTeam === teams.length - 1 ? 0 : currentTeam + 1)
    );
  }, [dispatch]);

  return (
    <>
      <p>{teams[currentTeam].name}</p>
      {words.map(({ word, guessed }) => (
        <div key={word}>
          <p>{word}</p>
          <p>{guessed ? "+" : "-"}</p>
        </div>
      ))}
      <p>Score:</p>
      <p>{score}</p>
      <ScreenButton screen="results" text="Continue" />
    </>
  );
}
