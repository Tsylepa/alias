import words from "./words.json";
import _ from "lodash";
import { useSelector } from "react-redux";
import { getCurrentWord } from "src/redux/game/gameSelectors";

const Card = () => {
  const shuffledWords = _.shuffle(words);
  const currentWord = useSelector(getCurrentWord);

  return (
    <>
      <p>{currentWord}</p>
      <p>{shuffledWords[currentWord]}</p>
    </>
  );
};

export default Card;
