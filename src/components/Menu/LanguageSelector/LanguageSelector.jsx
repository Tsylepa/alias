import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { updateLanguage, newGame } from "src/redux/game/gameSlice";
import { getLanguage } from "src/redux/game/gameSelectors";
import css from "./LanguageSelector.module.css";
import en from "src/img/flags/GB.svg";
import ua from "src/img/flags/UA.svg";

const options = [
  {
    value: "en",
    label: (
      <div className={css.option}>
        <img src={en} width={20} height={15} />
        <span>English</span>
      </div>
    ),
  },
  {
    value: "ua",
    label: (
      <div className={css.option}>
        <img src={ua} width={20} height={15} />
        <span>Українська</span>
      </div>
    ),
  },
];

export default function LanguageSelector() {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);

  function handleSelect({ value }) {
    dispatch(updateLanguage(value));
    dispatch(newGame());
  }

  return (
    <Select
      options={options}
      onChange={handleSelect}
      defaultValue={options.find((op) => op.value === language)}
      classNames={{
        // input: () => css.inp,
        option: () => css.opt,
      }}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          cursor: "pointer",
          width: 200,
        }),
        input: () => ({ display: "none" }),
        menu: (baseStyles) => ({
          ...baseStyles,
          margin: 0,
          padding: 0,
          overflow: "hidden",
          border: "1px solid var(--contrast-color)",
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          // outline: "2px solid tomato",
          padding: 0,
        }),
        option: (baseStyles) => ({
          ...baseStyles,
          cursor: "pointer",
          color: "var(--contrast-color)",
        }),
      }}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "var(--btn-color)",
          primary: "var(--btn-bg-color)",
          neutral0: "var(--secondary-color)",
          neutral80: "var(--primary-color)",
        },
      })}
    />
  );
}
