import React, { useContext, useState } from "react";
import { JobsContext } from "../../../contextProvider/ContextProvider";
import Hero from "../../hero/Hero";
import Categories from "../../job categories/Categories";
import Jobs from "../../jobs/Jobs";
import { Link, Outlet } from "react-router-dom";
import "./mainContent.css";

const MainContent = () => {
  const { hero, jobs } = useContext(JobsContext);
  const [showAllJob, setShowAllJob] = useState(false);

  // handle jobs to show some jobs and then based on view button show all job
  const handleViewAllJob = () => {
    setShowAllJob(true);
  };
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
        {showAllJob ? (
          <Jobs value={jobs.length}></Jobs>
        ) : (
          <Jobs value={4}></Jobs>
        )}
      </div>
      {showAllJob ? (
        ""
      ) : (
        <Link onClick={handleViewAllJob} className="primary-btn view-all-btn">
          View All
        </Link>
      )}
    </div>
  );
};

export default MainContent;
