import React, { useContext } from "react";
import { JobsContext } from "../../contextProvider/ContextProvider";

const Home = () => {
  const res = useContext(JobsContext);
  console.log(res);
  return (
    <div>
      <h1>this is home component </h1>
    </div>
  );
};

export default Home;
