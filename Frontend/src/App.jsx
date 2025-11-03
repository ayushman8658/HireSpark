import React from "react";
import Navbar from "./components/ui/components_lite/Navbar";
import Register from "./components/ui/authentication/Register";
import Login from "./components/ui/authentication/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/ui/components_lite/Home";
import PrivacyPolicy from "./components/ui/components_lite/PrivacyPolicy";
import TermsandServices from "./components/ui/components_lite/TermsandServices";
import Jobs from "./components/ui/components_lite/Jobs.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/Terms-of-service",
    element: <TermsandServices />,
  },
  {
    path: "/Jobs",
    element: <Jobs />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
