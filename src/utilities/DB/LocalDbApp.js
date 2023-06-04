// set applied job to the local storage
function setToDB(job) {
  let newJob = [];
  const storedJob = JSON.parse(localStorage.getItem("applied_job"));
  if (storedJob) {
    const check = storedJob.find((singleJob) => singleJob.jobID === job.jobID);
    if (!check) {
      localStorage.setItem("applied_job", JSON.stringify([...storedJob, job]));
    }
  } else {
    localStorage.setItem("applied_job", JSON.stringify([...newJob, job]));
  }
}
// get appllied job from local db and return as valid js array
function getFromDB() {
  const storedJob = JSON.parse(localStorage.getItem("applied_job"));
  return storedJob;
}

export { setToDB, getFromDB };
