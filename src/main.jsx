import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./components/pages/home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./components/pages/profile";
import MessagesPage from "./components/pages/messages";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/messages",
    element: <MessagesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
