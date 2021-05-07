import { LIST_CHARACTERS } from "../types/Characters";
import axios from "axios";
import { ICharacterState } from "../reducer/Characters";

export const listCharacters = () => async (dispatch: any) => {
  try {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    dispatch({
      type: LIST_CHARACTERS,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
export const nextPageCharacters = () => async (
  dispatch: any,
  state: ICharacterState
) => {
  const nextPage = state.count + 1;

  try {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${nextPage}`
    );

    dispatch({
      type: LIST_CHARACTERS,
      payload: {
        page: nextPage,
        array: data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
