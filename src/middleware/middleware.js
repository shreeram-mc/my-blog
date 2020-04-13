import  Constants  from "../Constants/Constants";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === Constants.ADD_ARTICLE) {
        
        if (action.payload.text.length <= 0) {
          return dispatch({ type: "FOUND_NO_WORD" });
        }

        const foundWord = forbiddenWords.filter(word =>
          action.payload.text.includes(word)
        );

        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}