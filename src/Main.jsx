import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Singup from "./Signup.jsx";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login /> 
  },
  {
    path: "/signup",
    element: <Singup /> 
  },
  {
    path: "/navbar",
    element: <Navbar />
  },

  {
    path: "/home",
    element: <Home /> 
  },

  {
    path: "/about",
    element: <About />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
