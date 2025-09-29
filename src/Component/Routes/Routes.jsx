import { createBrowserRouter } from "react-router";
import Home from '../../Pages/Home';
import Main from "../Layout/Main";
import Product from "../../Pages/Product";
import productDetails from "../../Pages/productDetails";
import Cart from "../../Pages/Cart";
import Registration from "../../Pages/Registration";
import Login from "../../Pages/Login";
import AboutDetails from "../../Pages/AboutDetails";
import ContactDetails from "../../Pages/ContactDetails";
import Checkout from "../../Pages/Checkout";

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
      { path: "/about", Component: AboutDetails },
      { path: "/contact", Component: ContactDetails },
      { path: "/checkout", Component: Checkout },
    ]
  },
]);

export default router