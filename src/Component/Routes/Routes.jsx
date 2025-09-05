import { createBrowserRouter } from "react-router";
import Home from '../../Pages/Home';
import Main from "../Layout/Main";
import Product from "../../Pages/Product";

const router = createBrowserRouter([
   {
    path: "/",
    Component: Main,
    children: [
      { index: true, Component: Home },
      { path: "/product", Component: Product }
    ]
  },
]);

export default router