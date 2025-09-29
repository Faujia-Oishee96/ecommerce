import { createBrowserRouter } from "react-router";
import Home from '../../Pages/Home';
import Main from "../Layout/Main";
import Product from "../../Pages/Product";
import productDetails from "../../Pages/productDetails";
import Cart from "../../Pages/Cart";
import Registration from "../../Pages/Registration";
import Login from "../../Pages/Login";

const router = createBrowserRouter([
   {
    path: "/",
    Component: Main,
    children: [
      { index: true, Component: Home },
      { path: "product", Component: Product },
      { path: "product/:id", Component: productDetails },
      { path: "cart", Component: Cart },
      { path: "signup", Component: Registration },
      { path: "/signin", Component: Login },
    ]
  },
]);

export default router