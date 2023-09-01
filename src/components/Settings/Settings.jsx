import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveSettings } from "src/redux/game/gameSlice";
import ScreenButton from "src/components/ScreenButton";
import css from "./Settings.module.css";
import translation from "src/utils/translation";

const initial = {
  time: 60,
  winScore: 30,
};

const rangeDefaults = {
  timeMin: 15,
  timeMax: 180,
  scoreMin: 10,
  scoreMax: 100,
};

export default function Settings() {
  const dispatch = useDispatch();
  const [settings, setSettings] = useState(initial);
  const text = translation();

  function handleRange(t, property) {
    const min = t.min;
    const max = t.max;
    const val = t.value;
    let percentage = ((val - min) * 100) / (max - min);

    t.style.backgroundSize = percentage + "% 100%";

    setSettings({ ...settings, [property]: t.value });
  }

  function handleContinue() {
    dispatch(saveSettings(settings));
  }

  return (
    <>
      <ScreenButton screen="menu" back>
        {text.back}
      </ScreenButton>
      <h2>{text.settings}</h2>
      <div className={css.settings}>
        <div>
          <div className={css.title}>
            <label htmlFor="time">{text.roundTime}</label>
            <p>
              {settings.time} {text.seconds}
            </p>
          </div>
          <input
            name="time"
            type="range"
            min={rangeDefaults.timeMin}
            max={rangeDefaults.timeMax}
            step="15"
            value={settings.time}
            onChange={(e) => handleRange(e.target, "time")}
            style={{
              backgroundSize: `${
                ((settings.time - rangeDefaults.timeMin) /
                  (rangeDefaults.timeMax - rangeDefaults.timeMin)) *
                100
              }% 100%`,
            }}
          />
        </div>
        <div>
          <div className={css.title}>
            <label htmlFor="score">{text.wordsToWin}</label>
            <p>
              {settings.winScore} {text.words}
            </p>
          </div>
          <input
            name="score"
            type="range"
            min={rangeDefaults.scoreMin}
            max={rangeDefaults.scoreMax}
            step="5"
            value={settings.winScore}
            onChange={(e) => handleRange(e.target, "winScore")}
            style={{
              backgroundSize: `${
                ((settings.winScore - rangeDefaults.scoreMin) /
                  (rangeDefaults.scoreMax - rangeDefaults.scoreMin)) *
                100
              }% 100%`,
            }}
          />
        </div>
      </div>
      <ScreenButton
        className={css.continue}
        screen="getReady"
        onClick={handleContinue}>
        {text.continue}
      </ScreenButton>
    </>
  );
}
