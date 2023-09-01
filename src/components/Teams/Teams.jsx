import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "src/redux/game/gameSelectors";
import { updateTeams } from "src/redux/game/gameSlice";
import { FaTrashAlt } from "react-icons/fa";
import ScreenButton from "src/components/ScreenButton";
import css from "./Teams.module.css";
import translation from "src/utils/translation";

export default function Teams() {
  const dispatch = useDispatch();
  const teams = useSelector(getTeams);
  const text = translation();

  const [teamsList, setTeamsList] = useState(teams);

  useEffect(() => {
    setTeamsList(teams);
  }, [teams]);

  function addTeam() {
    const newTeam = { id: teamsList.length + 1, name: "New Team", score: 0 };
    const updatedTeams = [...teamsList, newTeam];

    setTeamsList(updatedTeams);
    dispatch(updateTeams(updatedTeams));
  }

  function changeName(e, teamId) {
    const updatedTeams = teamsList.map((team) =>
      team.id === teamId ? { ...team, name: e.target.value } : team
    );

    setTeamsList(updatedTeams);
    dispatch(updateTeams(updatedTeams));
  }

  function deleteTeam(id) {
    const updatedTeams = teamsList.filter((team) => team.id !== id);
    setTeamsList(updatedTeams);
  }

  return (
    <>
      <ScreenButton screen="menu" back>
        {text.back}
      </ScreenButton>
      <h2>{text.teams}</h2>
      <table>
        <tbody>
          {teamsList.map((t) => (
            <tr key={t.id}>
              <td>
                <input
                  type="text"
                  value={t.name}
                  className={css.input}
                  onChange={(e) => changeName(e, t.id)}
                />
                <FaTrashAlt
                  onClick={() => deleteTeam(t.id)}
                  className={css.delete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addTeam}>+ {text.addTeam}</button>
      <ScreenButton screen="categories" className={css.continue}>
        {text.continue}
      </ScreenButton>
    </>
  );
}
