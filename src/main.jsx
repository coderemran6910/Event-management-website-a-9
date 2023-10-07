import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import HomePageProvider from "./HomePageProvider/HomePageProvider";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <HomePageProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </HomePageProvider>
   </AuthProvider>
  </React.StrictMode>
);
