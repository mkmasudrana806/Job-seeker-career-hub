import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
