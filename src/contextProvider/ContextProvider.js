import React, { createContext } from "react";
export const JobsContext = createContext();
const ContextProvider = ({ children }) => {
  const info = { name: "masud rana", age: 20 };

  return <JobsContext.Provider value={info}>{children}</JobsContext.Provider>;
};

export default ContextProvider;
