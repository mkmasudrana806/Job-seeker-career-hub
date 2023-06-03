import React from "react";
import JobCategory from "../../job categories/JobCategory";

const MainContent = () => {

  return (
    <div>
      <div className="hero-section mt-5">
        {/* <Hero hero={hero}></Hero> */}
      </div>
      <div className="job-category">
        <h1>Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <JobCategory></JobCategory>
      </div>
      <div className="jobs-section"></div>
    </div>
  );
};

export default MainContent;
