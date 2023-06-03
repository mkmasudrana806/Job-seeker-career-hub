import React, { useContext } from "react";
import { JobsContext } from "../../contextProvider/ContextProvider";
import SingleJobCart from "./SingleJobCart";
import "./jobs.css";
import { Link } from "react-router-dom";

const Jobs = (show = 4) => {
  let { jobs } = useContext(JobsContext);
   jobs = jobs.slice(0, 4);
  return (
    <div className="jobs-container">
      {jobs.map((job) => (
        <SingleJobCart job={job} key={job.jobID}></SingleJobCart>
      ))}
    </div>
  );
};

export default Jobs;
