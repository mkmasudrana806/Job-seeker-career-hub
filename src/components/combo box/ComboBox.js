import React, { useContext } from "react";
import Select from "react-select";
import { AppliedJobsContext } from "../applied jobs/AppliedJobsContainer";
import {
  sortByFullTime,
  sortByHighSalary,
  sortByRemote,
} from "../../utilities/sort/SortByRemote";
import { getFromDB } from "../../utilities/DB/LocalDbApp";
const ComboBox = () => {
  const { setJobs } = useContext(AppliedJobsContext);

  const option = [{ value: "Filter By", label: "Filter By" }];
  const options = [
    { value: "Full Time", label: "Full Time" },
    { value: "Remote", label: "Remote" },
    { value: "Sort By Salary", label: "Sort By Salary" },
  ];
  // handle get selected value
  const handleGetSelectedValue = (event) => {
    const mode = event.value;
    setJobs([]);
    // jobs get from db
    const jobs = getFromDB();
    // this utilities function is inside utilities function
    if (mode === "Full Time") {
      setJobs(sortByFullTime(jobs));
    } else if (mode === "Remote") {
      setJobs(sortByRemote(jobs));
      console.log("yes remote");
    } else if (mode === "Sort By Salary") {
      setJobs(sortByHighSalary(jobs));
    }
  };

  return (
    <div>
      <Select
        onChange={handleGetSelectedValue}
        defaultValue={option}
        options={options}
      />
    </div>
  );
};

export default ComboBox;
