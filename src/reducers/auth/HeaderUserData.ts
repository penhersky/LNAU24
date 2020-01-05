import {SET_HEADER_USER_DATA} from "../../constants/headerUserData";

type Register = {
  type: string;
  id: number;
  name: string;
  surname: string;
  position: string;
};

type StateType = {
  id: number | undefined;
  name: string | undefined;
  surname: string | undefined;
  position: string | undefined;
};
export const initialState = {
  id: undefined,
  name: undefined,
  surname: undefined,
  position: undefined
};
export const headerUserData = (
  state: StateType = initialState,
  action: Register
) => {
  switch (action.type) {
    case SET_HEADER_USER_DATA:
      return {
        ...state,
        id: action.id,
        name: action.name,
        surname: action.surname,
        position: action.position
      };
    default:
      return state;
  }
};
