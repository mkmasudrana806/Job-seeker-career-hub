import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { JobsContext } from "../../contextProvider/ContextProvider";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faDollarSign,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./jobDetails.css";
import { setToDB } from "../../utilities/DB/LocalDbApp";

const JobDetails = () => {
  const id = useLoaderData();
  const { jobs } = useContext(JobsContext);
  let specificJob = jobs.find((job) => job.jobID === id);
  const job = specificJob || {};
  let {
    jobDescription,
    responsibilities,
    educationalRequirement,
    experience,
    salary,
    jobID,
    jobTitle,
    contactInformation,
    requirements,
  } = job;
  requirements = requirements || [];
  responsibilities = responsibilities || [];

  // handle apply job and set to the local storage
  const handleApplyJob = (job) => {
    setToDB(job);
  };

  return (
    <div className="job-details">
      <Row className="g-4">
        <h2 className="text-center">Job Details</h2>
        <Col xs="12" sm="12" md="6" lg="7" xl="8">
          <div className="job-requirements mt-3">
            <p>
              <strong>Job Description: </strong>
              {jobDescription}
            </p>
            <br />
            <p>
              <strong>Job Responsibility: </strong>
            </p>
            {responsibilities.length > 0
              ? responsibilities.map((responsibility, index) => (
                  <p key={index}>{responsibility}</p>
                ))
              : undefined}
            <br />
            <p>
              <strong>Job Requirements: </strong>
            </p>
            {requirements.length > 0
              ? requirements.map((requirement, index) => (
                  <p key={index}>{requirement}</p>
                ))
              : undefined}
            <p>
              <strong>Educational Requirements: </strong>
              {educationalRequirement}
            </p>
            <br />
            <p>
              <strong>Experience: </strong>
              {experience}
            </p>
          </div>
        </Col>
        <Col xs="8" sm="8" md="6" lg="5" xl="4" className="">
          <div className="job-details-cart p-4 mt-4">
            <h3>Job Details</h3>
            <hr />
            <p>
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>{" "}
              <strong>Salary: </strong>
              {/* {salary.min}-{salary.max}k (Per-Month) */}
              {salary ? `${salary.min}` : "undefined"} -{" "}
              {salary ? `${salary.max}` : "undefined"}k
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>{" "}
              <strong>Job Title: </strong>
              {jobTitle}
            </p>
            <h3 className="mt-5">Contact Information</h3>
            <hr />
            <p>
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{" "}
              <strong>Phone: </strong> {contactInformation?.phoneNumber}
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <strong>Email: </strong>{" "}
              {contactInformation?.email}
            </p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              <strong>Address: </strong> {contactInformation?.address}
            </p>
          </div>
          <button
            onClick={() => handleApplyJob(job)}
            style={{
              border: "none",
              marginTop: "20px",
              width: "100%",
              justifyContent: "center",
            }}
            className="primary-btn text-center"
          >
            Apply Now
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default JobDetails;
