import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddProduct from "../pages/AddProduct";
import AllServices from "../pages/AllServices";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Service from "../pages/Service";
import PrivateRoute from "./PrivateRoute";

const route = createBrowserRouter([
    {path:'/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home> },
        {path: '/addproduct', element: <AddProduct></AddProduct> },
        {path: '/register', element: <Register></Register> },
        {path: '/login', element: <Login></Login> },
        {path: '/services', element:<AllServices></AllServices>},
        {path: '/service/:id', loader: ({params}) => fetch(`https://uptech-server-takdirhossain.vercel.app/services/${params.id}`), element: <PrivateRoute><Service></Service></PrivateRoute> },
    ]}
])
export default route;