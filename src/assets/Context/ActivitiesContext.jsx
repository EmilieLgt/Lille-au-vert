import { createContext } from "react";

const ActivitiesContext = createContext();

export function ActivitiesProvider({ children }) {
  return <ActivitiesContext.Provider>{children}</ActivitiesContext.Provider>;
}
