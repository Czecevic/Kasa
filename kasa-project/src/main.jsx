import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/NavBar.jsx";
import { About } from './page/About'
import { HouseDetails } from "./components/HouseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:id",
    element: <HouseDetails />,
  },
  {
    path: "/About",
    element: <About/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
