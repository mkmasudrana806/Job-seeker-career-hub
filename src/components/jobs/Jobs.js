import React, { useContext } from "react";
import { JobsContext } from "../../contextProvider/ContextProvider";
import SingleJobCart from "./SingleJobCart";
import "./jobs.css";


const Jobs = ({ value }) => {
  let { jobs } = useContext(JobsContext);
  jobs = jobs.slice(0, value);
  return (
    <div className="jobs-container">
      {jobs.map((job) => (
        <SingleJobCart job={job} key={job.jobID}></SingleJobCart>
      ))}
    </div>
  );
};

export default Jobs;
