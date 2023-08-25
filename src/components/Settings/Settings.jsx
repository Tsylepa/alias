import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveSettings } from "src/redux/game/gameSlice";
import ScreenButton from "src/components/ScreenButton";

const initial = {
  time: 60,
  winScore: 30,
};

export default function Settings() {
  const dispatch = useDispatch();
  const [settings, setSettings] = useState(initial);

  function handleTime(t) {
    setSettings({ ...settings, time: t.value });
  }

  function handleScore(t) {
    setSettings({ ...settings, winScore: t.value });
  }

  function handleContinue() {
    dispatch(saveSettings(settings));
  }

  return (
    <>
      <h2>Settings</h2>
      <label htmlFor="time">Round Time</label>
      <p>{settings.time} seconds</p>
      <input
        name="time"
        type="range"
        min="10"
        max="180"
        step="15"
        value={settings.time}
        onChange={(e) => handleTime(e.target)}
      />{" "}
      <label htmlFor="score">Words to win</label>
      <p>{settings.winScore} words</p>
      <input
        name="score"
        type="range"
        min="10"
        max="100"
        step="5"
        value={settings.winScore}
        onChange={(e) => handleScore(e.target)}
      />
      <ScreenButton
        screen="getReady"
        text="Continue"
        onClick={handleContinue}
      />
    </>
  );
}
