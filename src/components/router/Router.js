import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../home/Home";
import MainContent from "../layout/content/MainContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <MainContent></MainContent>,
      },
    ],
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
]);
