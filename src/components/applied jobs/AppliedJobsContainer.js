import React, { createContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AppliedJobCart from "./AppliedJobCart";
import { getFromDB } from "../../utilities/DB/LocalDbApp";
import ComboBox from "../combo box/ComboBox";
export const AppliedJobsContext = createContext();

const AppliedJobsContainer = () => {
  let [jobs, setJobs] = useState([]);
  // load data from local storate
  useEffect(() => {
    function setToState() {
      setJobs(getFromDB());
    }
    setToState();
  }, []);
  // handle to clear local storage
  const hanldeClearLocalStorage = () => {
    localStorage.clear("applied_job");
    setJobs([]);
  };
  const contextInfo = { setJobs };
  return (
    <AppliedJobsContext.Provider value={contextInfo}>
      <div className="apllied-jobs-container">
        <Row>
          <div>
            {jobs?.length > 0 ? (
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
            {jobs?.length ? (
              <>
                <div className="d-flex justify-content-end">
                  <div style={{ width: "150px" }}>
                    <ComboBox></ComboBox>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <div style={{ width: "150px" }}>
                    <button
                      onClick={hanldeClearLocalStorage}
                      style={{
                        width: "150px",
                        height: "40px",
                        border: "1px solid #bbbaba",
                        borderRadius: "5px",
                        marginTop: "10px",
                      }}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <Col className="mt-4">
            {jobs?.map((job) => (
              <AppliedJobCart job={job} key={job.jobID}></AppliedJobCart>
            ))}
          </Col>
        </Row>
      </div>
    </AppliedJobsContext.Provider>
  );
};

export default AppliedJobsContainer;
