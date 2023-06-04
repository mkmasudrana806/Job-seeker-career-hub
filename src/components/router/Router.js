import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import MainContent from "../layout/content/MainContent";
import JobDetails from "../job details/JobDetails";
import AppliedJobs from "../applied jobs/AppliedJobsContainer";
import Chart from "../chart/Chart";
import Blog from "../blogs/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <MainContent></MainContent>,
      },
      {
        path: "/home",
        element: <MainContent></MainContent>,
      },
      {
        path: "/job-details/:id",
        loader: ({ params }) => {
          return params.id;
        },
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/statistics",
        element: <Chart></Chart>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
  },
]);
