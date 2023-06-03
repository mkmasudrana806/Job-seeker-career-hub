import React, { useContext } from "react";
import { JobsContext } from "../../../contextProvider/ContextProvider";
import Hero from "../../hero/Hero";
import Categories from "../../job categories/Categories";

const MainContent = () => {
  const { hero } = useContext(JobsContext);
  return (
    <div>
      <div className="hero-section my-5">
        <Hero hero={hero}></Hero>
      </div>
      <div className="my-5">
        <div className="mx-auto w-75 my-5 text-center">
          <h1>Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future.
          </p>
        </div>
        <Categories></Categories>
        <div className="mx-auto w-75 my-5 text-center">
          <h1>Featured Jobs</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future.
          </p>
        </div>
      </div>
      <div className="jobs-section"></div>
    </div>
  );
};

export default MainContent;
