import React from "react";
import "./SingleJobCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Tags from "../tags/Tags";
import { Link } from "react-router-dom";

const SingleJobCart = ({ job }) => {
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
    <div className="single-job-cart">
      <img src={companyLogo} alt="" />
      <h3 className="job-title">{jobTitle}</h3>
      <h4 className="job-role">{jobRole}</h4>
      <p className="company-name">{companyName}</p>
      <div className="tags-container">
        {jobTags.map((tag, index) => (
          <Tags tag={tag} key={index}></Tags>
        ))}
      </div>
      <div className="job-footer">
        <p className="job-location">
          {" "}
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {jobLocation}
        </p>
        <p>
          <span className="dollar-sign">&#36;</span>
          Salary: {salary?.min}k-{salary?.max}k
        </p>
      </div>
      <Link to={`/job-details/${jobID}`} className="primary-btn">
        View Details
      </Link>
    </div>
  );
};

export default SingleJobCart;
