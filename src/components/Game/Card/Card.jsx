import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getWordsCollection } from "src/redux/game/gameSelectors";

const Card = () => {
  const wordsCollection = useSelector(getWordsCollection);

  useEffect(() => {}, []);

  return (
    <>
      <p>{wordsCollection[0]}</p>
    </>
  );
};

export default Card;
