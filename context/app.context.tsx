import { createContext, useState } from "react";

export const AppContext = createContext({});
const [state, setState] = useState(null);
export const AppContextProvider = ({ children }) => {
  return <AppContext.Provider value={state}>
    {children}
  </AppContext.Provider>;
};
