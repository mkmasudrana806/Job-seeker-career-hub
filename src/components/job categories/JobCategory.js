import React from "react";
import "./jobCategory.css";

const JobCategory = ({ category }) => {
  const { icon, title, jobNumber } = category;
  return (
    <div className="job-category">
      <img className="category-icon" src={icon} alt="" />
      <h3 className="category-title">{title}</h3>
      <p>{jobNumber} Jobs Avaiable</p>
    </div>
  );
};

export default JobCategory;
