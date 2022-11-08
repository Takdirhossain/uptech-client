import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddProduct from "../pages/AddProduct";
import Home from "../pages/Home";

const route = createBrowserRouter([
    {path:'/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home> },
        {path: '/addproduct', element: <AddProduct></AddProduct> }
    ]}
])
export default route;