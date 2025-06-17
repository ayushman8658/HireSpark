import React from "react";
import Navbar from "./components/ui/components_lite/Navbar";
import Register from "./components/ui/authentication/Register";
import Login from "./components/ui/authentication/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/ui/components_lite/Home";

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
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
