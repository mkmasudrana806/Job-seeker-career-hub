import React, { createContext, useEffect, useState } from "react";
export const JobsContext = createContext();
const ContextProvider = ({ children }) => {
  const [hero, setHero] = useState({});
  const [jobCategory, setJobCategory] = useState([]);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [apiResponse1, apiResponse2, apiResponse3] = await Promise.all([
          fetch("/data/heroData.json").then((response) => response.json()),
          fetch("/data/jobCategory.json").then((response) => response.json()),
          fetch("/data/jobData.json").then((response) => response.json()),
        ]);
        setHero(apiResponse1);
        setJobCategory(apiResponse2);
        setJobs(apiResponse3);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const contextInfo = { hero, jobs, jobCategory };
  return (
    <JobsContext.Provider value={contextInfo}>{children}</JobsContext.Provider>
  );
};

export default ContextProvider;
