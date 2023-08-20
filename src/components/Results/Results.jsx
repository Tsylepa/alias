import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "src/redux/game/gameSelectors";
import { switchScreen } from "../../redux/game/gameSlice";

export default function Results() {
  const dispatch = useDispatch();
  const teams = useSelector(getTeams);

  function handleStart() {
    dispatch(switchScreen("game"));
  }

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
      <button type="button" onClick={handleStart}>
        Start
      </button>
    </>
  );
}
