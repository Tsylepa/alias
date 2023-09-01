import css from "./App.module.css";
import Menu from "./components/Menu";
import Teams from "./components/Teams";
import Categories from "./components/Categories";
import Settings from "./components/Settings";
import GetReady from "./components/GetReady";
import Game from "./components/Game";
import Round from "./components/Round";
import Results from "./components/Results";
import Winner from "./components/Winner";
import useScreen from "./hooks/useScreen";
import { useEffect } from "react";

const App = () => {
  const [screen, setScreen] = useScreen();

  useEffect(() => {
    setScreen("menu");
  }, []);

  return (
    <div className={css.app}>
      {screen === "menu" && <Menu />}
      {screen === "teams" && <Teams />}
      {screen === "categories" && <Categories />}
      {screen === "settings" && <Settings />}
      {screen === "getReady" && <GetReady />}
      {screen === "game" && <Game />}
      {screen === "round" && <Round />}
      {screen === "results" && <Results />}
      {screen === "winner" && <Winner />}
    </div>
  );
};

export default App;
