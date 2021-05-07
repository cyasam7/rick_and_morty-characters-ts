import { ICharacter } from "../../types/types";
import { LIST_CHARACTERS } from "../types/Characters";
type Action = {
  type: string;
  payload: any;
};
export interface ICharacterState {
  characters: ICharacter[];
  count: number;
  pages: number;
}

const initialState = {
  characters: [],
  count: 0,
  pages: 34,
};

function Reducer(state: ICharacterState = initialState, action: Action) {
  switch (action.type) {
    case LIST_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    default:
      return state;
  }
}
export default Reducer;
