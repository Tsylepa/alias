import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRoundResults,
  getCurrentTeam,
  getTeams,
} from "src/redux/game/gameSelectors";
import { updateTeams, updateCurrentTeam } from "src/redux/game/gameSlice";
import css from "./Round.module.css";
import ScreenButton from "src/components/ScreenButton";
import { BiSolidLike, BiLike } from "react-icons/bi";

export default function Round() {
  const dispatch = useDispatch();
  const currentTeam = useSelector(getCurrentTeam);
  const teams = useSelector(getTeams);
  const roundResults = useSelector(getRoundResults);

  const [words, setWords] = useState(roundResults);

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
  }, [dispatch]);

  function handleGuessed(idx) {
    setWords((prev) => {
      const updatedWords = [...prev];
      updatedWords[idx] = {
        ...updatedWords[idx],
        guessed: !updatedWords[idx].guessed,
      };
      return updatedWords;
    });
  }

  function handleContinue() {
    dispatch(
      updateCurrentTeam(currentTeam === teams.length - 1 ? 0 : currentTeam + 1)
    );
  }

  return (
    <>
      <h2>Round results</h2>
      <h3>{teams[currentTeam].name}</h3>
      <table className={css.table}>
        <tbody>
          {words.map(({ word, guessed }, idx) => (
            <tr key={word}>
              <td className={css.left}>{word}</td>
              <td>
                <span className={css.icon} onClick={() => handleGuessed(idx)}>
                  {guessed ? <BiSolidLike /> : <BiLike />}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className={css.tfoot}>
          <tr>
            <td className={css.left}>Score:</td>
            <td className={css.score}>
              {score > 0 && "+"}
              {score}
            </td>
          </tr>
        </tfoot>
      </table>

      <ScreenButton screen="results" text="Continue" onClick={handleContinue} />
    </>
  );
}
