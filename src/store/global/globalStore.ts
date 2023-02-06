import { useReducer, createContext } from "react";

enum GlobalActionType {
  LIGHT_THEME = "LIGHT_THEME",
  DARK_THEME = "DARK_THEME",
}

interface GlobalAction {
  type: GlobalActionType;
  payload: string;
}

interface GlobalStateType {
  theme: "light";
  isModalOpen: false;
}

export const globalReducer = (state: GlobalStateType, action: GlobalAction) => {
  const { type, payload } = action;
  switch (type) {
    case GlobalActionType.LIGHT_THEME:
      return {
        ...state,
        theme: "light",
      };
    case GlobalActionType.DARK_THEME:
      return {
        ...state,
        theme: "dark",
      };
    default:
      return state;
  }
};
