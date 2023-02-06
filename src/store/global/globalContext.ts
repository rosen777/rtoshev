import { createContext } from "react";
import { GlobalActionType } from "./globalActions";

export type User = {
  id: number;
  fullName: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  logout: () => void;
};

export const GlobalState = createContext<Partial<GlobalActionType>>({});
GlobalState.displayName = "GlobalState";
