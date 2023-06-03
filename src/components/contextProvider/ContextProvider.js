import React, { Children, createContext, useEffect, useState } from "react";

export const JobContext = createContext();
const ContextProvider = () => {
  const [jobs, setJobs] = useState(null);
  const [jobCategory, setJobCategory] = useState(null);
  const [heros, setHeros] = useState(null);
  // load all the global data or default data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hero, jobs, categories] = await Promise.all([
          fetch("/data/heroData.json").then((response) => response.json()),
          fetch("/data/jobCategory.json").then((response) => response.json()),
          fetch("/data/jobData.json").then((response) => response.json()),
        ]);
        setJobs(jobs);
        setJobCategory(categories);
        setHeros(hero);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [jobs, jobCategory, heros]);

  const contextInfo = { jobs, jobCategory, heros };
  return (
    <JobContext.Provider value={contextInfo}>{Children}</JobContext.Provider>
  );
};

export default ContextProvider;
