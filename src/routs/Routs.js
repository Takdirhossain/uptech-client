import { createBrowserRouter } from "react-router-dom";
import MyReviewAdmin from "../components/MyReviewAdmin";
import Main from "../layout/Main";
import AddProduct from "../pages/AddProduct";
import AllServices from "../pages/AllServices";
import Blogs from "../pages/Blogs";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Myreview from "../pages/Myreview";
import Register from "../pages/Register";
import Service from "../pages/Service";
import Update from "../pages/Update";

import PrivateRoute from "./PrivateRoute";
 
const route = createBrowserRouter([
    {path:'/', element: <Main></Main>, errorElement: <Errorpage></Errorpage>, children: [
        {path: '/', element: <Home></Home> },
        {path: '/blog', element: <Blogs></Blogs>},
        {path: '/addproduct', element: <AddProduct></AddProduct> },
        {path: '/register', element: <Register></Register> },  
        {path: '/myreview', element: <Myreview></Myreview> },  
        {path: '/login', element: <Login></Login> },
        {path: '/update/:id', element: <Update></Update>, loader: ({params}) => fetch(`https://uptech-server-takdirhossain.vercel.app/review/${params.id}`) },
        {path: '/services', element:<AllServices></AllServices>},
        {path: '/service/:id', loader: ({params}) => fetch(`https://uptech-server-takdirhossain.vercel.app/services/${params.id}`), element: <PrivateRoute><Service></Service></PrivateRoute> },
    ]}
])
export default route;