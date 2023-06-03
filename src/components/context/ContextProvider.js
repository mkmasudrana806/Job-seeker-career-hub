import React, { createContext } from "react";
import Footer from "../footer/Footer";
export const TestContext = createContext();
const ContextProvider = () => {
  const info = {
    name: "masud rana",
    age: 20,
    cgpa: 3.8,
  };
  return (
    <div>
      <TestContext.Provider value={info}>
        <Footer />
      </TestContext.Provider>
    </div>
  );
};

export default ContextProvider;
