import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoutes from "./PrivetRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashbord from "../Layout/Dashbord";
import Cart from "../Pages/Dashbord/Cart/Cart";
import AllUsers from "../Pages/Dashbord/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'menu',
        element:<Menu></Menu>
      },
      {
        path:'ourshop',
        element:<OurShop></OurShop>
      },
      {
        path:'login',
        element: <LogIn></LogIn>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'secret',
        element:<PrivetRoutes><Secret></Secret></PrivetRoutes>
      }
    ],
  },
  {
    path:'dashbord',
    element:<PrivetRoutes><Dashbord></Dashbord></PrivetRoutes>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      },
      // admin routes
      {
        path:'alluser',
        element:<AllUsers></AllUsers>
      }
    ]
  }
]);
