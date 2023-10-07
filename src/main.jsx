import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import HomePageProvider from "./HomePageProvider/HomePageProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomePageProvider>
      <RouterProvider router={router}></RouterProvider>
    </HomePageProvider>
  </React.StrictMode>
);
