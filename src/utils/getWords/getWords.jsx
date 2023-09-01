import _ from "lodash";
import enEasy from "./en/easy.json";
import enMedium from "./en/medium.json";
import enHard from "./en/hard.json";
import uaEasy from "./ua/easy.json";
import uaMedium from "./ua/medium.json";
import uaHard from "./ua/hard.json";

export default function getWords(language, category) {
  let words;

  if (language === "en")
    switch (category) {
      case "easy":
        words = enEasy;
        break;
      case "medium":
        words = enMedium;
        break;
      case "hard":
        words = enHard;
        break;
      default:
        words = [];
    }

  if (language === "ua")
    switch (category) {
      case "easy":
        words = uaEasy;
        break;
      case "medium":
        words = uaMedium;
        break;
      case "hard":
        words = uaHard;
        break;
      default:
        words = [];
    }
  return _.shuffle(words);
}
