import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTeams } from "src/redux/game/gameSlice";
import { FaTrashAlt } from "react-icons/fa";
import ScreenButton from "src/components/ScreenButton";
import css from "./Teams.module.css";
import translation from "src/utils/translation";
import { getLanguage } from "src/redux/game/gameSelectors";
import _ from "lodash";

export default function Teams() {
  const dispatch = useDispatch();
  const text = translation();
  const language = useSelector(getLanguage);

  const [teamsList, setTeamsList] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    import(`./names/${language}/names.json`)
      .then((names) => _.shuffle(names.default))
      .then((names) => {
        createInitialTeams(names.slice(0, 2));
        setNames(names.slice(2));
      });
  }, [language]);

  function createInitialTeams(names) {
    const initialTeams = [];
    for (let i = 0; i < 2; i++) {
      if (names.length > 0) {
        const newTeam = { id: i + 1, name: names[i], score: 0 };
        initialTeams.push(newTeam);
      }
    }

    setTeamsList(initialTeams);
    dispatch(updateTeams(initialTeams));
  }

  function addTeam() {
    const newTeam = { id: teamsList.length + 1, name: names[0], score: 0 };
    const updatedTeams = [...teamsList, newTeam];
    setTeamsList(updatedTeams);
    dispatch(updateTeams(updatedTeams));
    updateNames();
  }

  function updateNames() {
    const updatedNames = [...names];
    updatedNames.shift();
    setNames(updatedNames);
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
      <ScreenButton
        screen="categories"
        className={css.continue}
        disabled={teamsList.length < 2}>
        {text.continue}
      </ScreenButton>
    </>
  );
}
