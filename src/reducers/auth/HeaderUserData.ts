import {
  SET_HEADER_USER_DATA,
  GET_HEADER_USER_DATA
} from "../../constants/headerUserData";

type HeaderUserData = {
  type: string;
  id?: number;
  name?: string;
  surname?: string;
  position?: string;
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
  action: HeaderUserData
) => {
  switch (action.type) {
    case SET_HEADER_USER_DATA:
      return {
        id: action.id,
        name: action.name,
        surname: action.surname,
        position: action.position
      };
    case GET_HEADER_USER_DATA:
      return {
        id: state.id,
        name: state.name,
        surname: state.surname,
        position: state.position
      };
    default:
      return state;
  }
};
