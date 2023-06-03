import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Tags from "../tags/Tags";
import { Link } from "react-router-dom";
import "./appliedJobCart.css";

const AppliedJobCart = ({ job }) => {
  const {
    companyLogo,
    companyName,
    jobTitle,
    jobTags,
    jobLocation,
    salary,
    jobID,
    jobRole,
  } = job;

  return (
    <div className="applied-job-cart">
      <div className="job-cart-img">
        <img src={companyLogo} alt="" />
      </div>
      <div className="applied-cart-body">
        <div className="w-100">
          <h3 className="job-title">{jobTitle}</h3>
          <h4 className="job-role">{jobRole}</h4>
          <p className="company-name">{companyName}</p>
          <div className="d-none">
            {jobTags.map((tag, index) => (
              <Tags tag={tag} key={index}></Tags>
            ))}
          </div>
          <div className="job-footer">
            <p className="job-location">
              {" "}
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>{" "}
              {jobLocation}
            </p>
            <p>
              <span className="dollar-sign">&#36;</span>
              Salary: {salary?.min}k-{salary?.max}k
            </p>
          </div>
        </div>
        <div>
          <Link to={`/job-details/${jobID}`} className="primary-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCart;
