import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

/* Reducers */
import ReducerCharacters, { ICharacterState } from "./reducer/Characters";
/* Tipo para windows */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
console.log(ReducerCharacters);

export interface IStore {
  characters: ICharacterState;
}

const rootReducer = combineReducers({
  characters: ReducerCharacters,
});
/* Se inicializa la extension */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* Se crea store */
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
