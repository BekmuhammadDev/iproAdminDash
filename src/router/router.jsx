import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard"
import User from "../pages/user"
import Orders from "../pages/orders"
import Help from "../pages/help"
import Careers from "../pages/careers"
import Service from "../pages/service"


const router = createBrowserRouter([{
    path:"/",
    children: [
        { index: true, element: <Dashboard /> },
        { path: "user", element: <User /> },
        { path: "order", element: <Orders /> },
        { path: "help", element: <Help /> },
        { path: "careers", element: <Careers /> },
        { path: "services", element: <Service /> },
        { path: "*", element: <NotFound /> },
      ],
}])