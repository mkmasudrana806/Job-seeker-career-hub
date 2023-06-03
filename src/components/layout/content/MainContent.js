import React, { useContext } from "react";
import { JobsContext } from "../../../contextProvider/ContextProvider";
import Hero from "../../hero/Hero";
import Categories from "../../job categories/Categories";
import Jobs from "../../jobs/Jobs";
import { Link } from "react-router-dom";
import './mainContent.css';

const MainContent = () => {
  const { hero } = useContext(JobsContext);
  return (
    <div>
      <div className="hero-section">
        <Hero hero={hero}></Hero>
      </div>
      <div className="job-category-section">
        <div className="mx-auto w-75 text-center">
          <h1>Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future.
          </p>
        </div>
        <Categories></Categories>
      </div>
      <div className="featured-jobs-section">
        <div className="mx-auto w-75 my-5 text-center">
          <h1>Featured Jobs</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future.
          </p>
        </div>
        <Jobs></Jobs>
      </div>
      <Link className="primary-btn view-all-btn">View All</Link>
    </div>
  );
};

export default MainContent;
