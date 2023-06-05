const sortByRemote = (jobs) => {
  const remoteSort = jobs.filter((job) => job.jobTags[0] === "Remote");
  return remoteSort;
};

const sortByFullTime = (jobs) => {
  const fullTimeSort = jobs.filter(
    (job) => job.jobTags[0] === ("Full Time" || "full time" || "Full time")
  );
  return fullTimeSort;
};

const sortByHighSalary = (jobs) => {
  function sortByHighSalary(a, b) {
    const maxA = a.salary.max;
    const maxB = b.salary.max;
    const diffA = a.salary.max - a.salary.min;
    const diffB = b.salary.max - b.salary.min;

    // Calculate the "high salary" score for each job listing
    const scoreA = maxA - diffA;
    const scoreB = maxB - diffB;

    // Sort by high salary score in descending order
    return scoreB - scoreA;
  }

  // Step 3: Sort the job listings
  const sortedListings = jobs.sort(sortByHighSalary);
  return sortedListings;
};

export { sortByFullTime, sortByRemote, sortByHighSalary };
