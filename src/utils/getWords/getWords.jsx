import _ from "lodash";

export default async function getWords(language, category) {
  try {
    const list = await import(`./${language}/${category}.json`);
    const words = list.default;
    return _.shuffle(words);
  } catch (error) {
    console.error("Помилка завантаження слів:", error);
    return [];
  }
}
