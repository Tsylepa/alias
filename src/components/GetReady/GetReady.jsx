import { useSelector } from "react-redux";
import { getCurrentTeam, getTeams } from "src/redux/game/gameSelectors";
import { IoIosArrowBack } from "react-icons/io";
import ScreenButton from "src/components/ScreenButton";
import css from "./GetReady.module.css";

export default function GetReady() {
  const team = useSelector(getTeams)[useSelector(getCurrentTeam)];

  return (
    <div className={css.screen}>
      <ScreenButton screen="menu" className={css.back}>
        <IoIosArrowBack />
        Back
      </ScreenButton>
      <h1>{team.name}</h1>
      <p>Are you ready?</p>
      <ScreenButton screen="game" className={css.start}>
        Start
      </ScreenButton>
    </div>
  );
}
