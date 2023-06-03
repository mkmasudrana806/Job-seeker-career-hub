import React, { Children, createContext, useEffect, useState } from "react";
// const jobsContext = createContext(null);
// const heroContext = createContext(null);
// const jobCategoryContext = createContext(null);
export const jobsContext = createContext(null);
export const heroContext = createContext(null);
export const jobCategoryContext = createContext(null);

const MyContext = () => {
  const [jobs, setJobs] = useState([]);
  const [jobCategory, setJobCategory] = useState([]);
  const [hero, setHero] = useState([]);
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
        setHero(hero);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [jobs, jobCategory]);

  return (
    <jobsContext.Provider value={jobs}>
      <jobCategoryContext.Provider value={jobCategory}>
        <heroContext.Provider value={hero}>{Children}</heroContext.Provider>
      </jobCategoryContext.Provider>
    </jobsContext.Provider>
  );
};

export default MyContext;
