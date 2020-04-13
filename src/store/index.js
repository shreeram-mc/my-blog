import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers/index';
import { forbiddenWordsMiddleware } from "../middleware/middleware";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function saveToLocalStorage(state) {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem('state', serialized);
  }
  catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialzied = localStorage.getItem('state');
    if (serialzied === null) return undefined;

    return JSON.parse(serialzied);
  }
  catch (e) {
    console.log(e)
    return undefined;
  }
}
 

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;