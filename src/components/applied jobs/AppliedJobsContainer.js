import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { JobsContext } from "../../contextProvider/ContextProvider";
import AppliedJobCart from "./AppliedJobCart";
import { getFromDB } from "../../utilities/DB/LocalDbApp";

const AppliedJobsContainer = () => {
  // const { jobs } = useContext(JobsContext);
  const [jobs, setJobs] = useState([]);
  // load data from local storate
  useEffect(() => {
    function setToState() {
      setJobs(getFromDB());
    }
    setToState();
  }, []);
  return (
    <div className="apllied-jobs-container">
      <Row>
        <h2 className="text-center mt-2">Applied Jobs</h2>
        <Col className="mt-4">
          {jobs.map((job) => (
            <AppliedJobCart job={job} key={job.jobID}></AppliedJobCart>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default AppliedJobsContainer;
