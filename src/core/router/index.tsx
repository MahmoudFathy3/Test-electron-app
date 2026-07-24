import { createHashRouter } from "react-router-dom";
import Home from "../../features/Home/Home";
import About from "../../features/About/About";
import Splash from "../../splash";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/splash",
    element: <Splash />,
  },
]);
