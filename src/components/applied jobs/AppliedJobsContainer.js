import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AppliedJobCart from "./AppliedJobCart";
import { getFromDB } from "../../utilities/DB/LocalDbApp";
import ComboBox from "../combo box/ComboBox";

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
        <div>
          {jobs.length > 0 ? (
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              Applied Jobs
            </h2>
          ) : (
            <h2 className="text-center mt-2 text-danger">
              You have not applied yet any job!
            </h2>
          )}
          {jobs.length && (
            <div className="d-flex justify-content-end">
              <div style={{ width: "120px" }}>
                <ComboBox></ComboBox>
              </div>
            </div>
          )}
        </div>
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
