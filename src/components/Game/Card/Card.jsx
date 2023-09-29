import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getWordsCollection } from "src/redux/game/gameSelectors";
import css from "./Card.module.css";

const Card = () => {
  const wordsCollection = useSelector(getWordsCollection);

  return (
    <div className={css.card}>
      <p
        className={css.word}
        style={{ fontSize: 33 - wordsCollection[0].length }}>
        {wordsCollection[0]}
      </p>
    </div>
  );
};

export default Card;
