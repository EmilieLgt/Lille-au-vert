import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import DemiJournee from "./pages/DemiJournee.jsx";
import Quotidien from "./pages/Quotidien.jsx";
import UneHeure from "./pages/UneHeure.jsx";
import WeekEnd from "./pages/WeekEnd.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/activites/uneheure",
        element: <UneHeure />,
      },
      {
        path: "/activites/demijournee",
        element: <DemiJournee />,
      },
      {
        path: "/activites/weekend",
        element: <WeekEnd />,
      },
      {
        path: "/activites/quotidien",
        element: <Quotidien />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
