import { useSelector } from "react-redux";
import { getCurrentTeam, getTeams } from "src/redux/game/gameSelectors";
import { IoIosArrowBack } from "react-icons/io";
import ScreenButton from "src/components/ScreenButton";
import css from "./GetReady.module.css";
import translation from "src/utils/translation";

export default function GetReady() {
  const team = useSelector(getTeams)[useSelector(getCurrentTeam)];
  const text = translation();

  return (
    <div className={css.screen}>
      <ScreenButton screen="menu" back>
        {text.back}
      </ScreenButton>
      <h1>{team.name}</h1>
      <p>{text.ready}</p>
      <ScreenButton screen="game" className={css.start}>
        {text.start}
      </ScreenButton>
    </div>
  );
}
