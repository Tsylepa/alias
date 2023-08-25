import { useSelector } from "react-redux";
import { getCurrentTeam, getTeams } from "src/redux/game/gameSelectors";
import ScreenButton from "src/components/ScreenButton";

export default function GetReady() {
  const team = useSelector(getTeams)[useSelector(getCurrentTeam)];

  return (
    <>
      <p>{team.name}</p>
      <p>Are you ready?</p>
      <ScreenButton screen="game" text="Start" />
    </>
  );
}
