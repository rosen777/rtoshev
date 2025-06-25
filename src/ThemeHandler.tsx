import {
  createContext,
  JSXElementConstructor,
  ReactElement,
  ReactPortal,
  useReducer,
  useContext,
} from "react";
let SET_THEME: "SET_THEME" = "SET_THEME";

type State = { darkMode: boolean };
type Action = { type: "SET_THEME"; payload: boolean };

const darkModeContext = createContext<
  { darkMode: boolean; setDarkMode: (isDarkMode: boolean) => void } | undefined
>(undefined);

const darkModeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

const DarkModeProvider = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactPortal
    | null
    | undefined
    | React.ReactNode;
}) => {
  const initialState = {
    darkMode: false,
  };
  const [state, dispatch] = useReducer(darkModeReducer, initialState);

  const setDarkMode = async (isDarkMode: boolean) => {
    dispatch({
      type: SET_THEME,
      payload: isDarkMode,
    });
  };

  return (
    <darkModeContext.Provider
      value={{
        darkMode: state.darkMode,
        setDarkMode,
      }}>
      {props.children}
    </darkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(darkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a CountProvider");
  }
  return context;
};

export { DarkModeProvider, useDarkMode, darkModeReducer, darkModeContext };
