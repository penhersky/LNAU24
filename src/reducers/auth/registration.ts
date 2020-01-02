type Register = {type: string};
export const login = (state = {}, action: Register) => {
  switch (action.type) {
    case "":
      return {
        ...state,
        id: 1
      };

    default:
      return state;
  }
};
