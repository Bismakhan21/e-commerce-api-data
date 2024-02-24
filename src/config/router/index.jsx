import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../../pages/login";
import Signup from "../../pages/signup";
import Dashboard from "../../pages/dashboard";
import ProductDetails from "../../components/productdetails";

const router = createBrowserRouter(
   
    [
       
        {
            path:'/',
            element: <Login />
        },
        {
            path:'/signup',
            element: <Signup />
        },
        {
            path:'/dashboard',
            element: <Dashboard />
        },
        {
            path:'/product/:id',
            element: <ProductDetails/>
        },

    ]
)

const Router = () => {


    return <RouterProvider router={router} />
}

export default Router;