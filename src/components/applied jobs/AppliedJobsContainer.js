import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { JobsContext } from "../../contextProvider/ContextProvider";
import AppliedJobCart from "./AppliedJobCart";

const AppliedJobsContainer = () => {
  const { jobs } = useContext(JobsContext);
  console.log(jobs);
  return (
    <div className="apllied-jobs-container">
      <Row>
        <h2 className="text-center mt-2">Applied Jobs</h2>
        <Col className="mt-4">{
            jobs.map(job => <AppliedJobCart job={job} key={job.jobID}></AppliedJobCart>)
        }</Col>
      </Row>
    </div>
  );
};

export default AppliedJobsContainer;
