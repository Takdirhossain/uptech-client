import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddProduct from "../pages/AddProduct";
import AllServices from "../pages/AllServices";
import Home from "../pages/Home";
import Service from "../pages/Service";

const route = createBrowserRouter([
    {path:'/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home> },
        {path: '/addproduct', element: <AddProduct></AddProduct> },
        {path: '/services', element: <AllServices></AllServices> },
        {path: '/service/:id', loader: ({params}) => fetch(`https://uptech-server-takdirhossain.vercel.app/services/${params.id}`), element: <Service></Service> },
    ]}
])
export default route;