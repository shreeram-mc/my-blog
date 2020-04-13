import Constants from "../../Constants/Constants";
import update from 'immutability-helper';

const initialState = {
  remoteArticles: []
};

function rootReducer(state = initialState, action) {

  switch (action.type) {

    case Constants.ADD_ARTICLE:
      return {
        ...state,
        remoteArticles: state.remoteArticles.concat(action.payload)
      };

    case Constants.ADD_UPVOTE:      
    case Constants.ADD_COMMENT:
      let key = state.remoteArticles.findIndex(x => x.id === action.payload.id);
      return update(state, { remoteArticles: { [key]: { $set: action.payload } } });

    case Constants.DATA_LOADED:
      return {
        ...state,
        remoteArticles: action.payload
      };

    default:
      return state;
  }
}

//   if (action.type === Constants.ADD_ARTICLE) {

//     return Object.assign({}, state, {
//       remoteArticles: state.remoteArticles.concat(action.payload),
//     });
//   }

//   if (action.type === Constants.DATA_LOADED) {

//     return Object.assign({}, state, {
//       remoteArticles: state.remoteArticles.concat(action.payload),
//     });
//   } 

//   if (action.type === Constants.ADD_COMMENT) {

//     let key = state.remoteArticles.findIndex(x => x.id === action.payload.id); 

//     return update(state, {remoteArticles: {[key]: {$set: action.payload}}});

//   }

//   return state;
// }

export default rootReducer;