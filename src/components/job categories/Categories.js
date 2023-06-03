import React, { useContext } from "react";
import { JobsContext } from "../../contextProvider/ContextProvider";
import JobCategory from "./JobCategory";
import "./categories.css";

const Categories = () => {
  const { jobCategory } = useContext(JobsContext);
  const categories = jobCategory || [];
  console.log(categories);
  return (
    <div className="job-categories">
      {categories.map((category) => (
        <JobCategory
          category={category}
          key={category.categoryID}
        ></JobCategory>
      ))}
    </div>
  );
};

export default Categories;
