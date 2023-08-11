import { useState } from "react";
import "./App.css";
import Game from "./components/Game";

const App = () => {
  const [count, setCount] = useState(0);

  return <Game />;
};

export default App;
