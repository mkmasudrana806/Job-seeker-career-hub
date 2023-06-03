import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../home/Home";
import MainContent from "../layout/content/MainContent";
import JobDetails from "../job details/JobDetails";


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
        path: "/job-details/:id",
        loader: ({ params }) => {
         return params.id;
        },
        element: <JobDetails></JobDetails>,
      },
    ],
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
]);
