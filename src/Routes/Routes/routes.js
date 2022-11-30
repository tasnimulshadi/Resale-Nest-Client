import { createBrowserRouter } from "react-router-dom";
import Dash from "../../Layout/Dash/Dash";
import Main from "../../Layout/Main/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Category/Category";
import DashBoard from "../../Pages/Dashboard/DashBoard";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyBuyers from "../../Pages/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AuthorizedRoute from "../AuthorizedRoute/AuthorizedRoute";
import Users from "../../Pages/Users/Users";
import ProductDetails from "../../Pages/Product/ProductDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/category/:categoryID',
                element: <PrivateRoute>
                    <Category></Category>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.categoryID}`)
            },
            {
                path: '/product/:productID',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.productID}`)
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>,
    }
]);

export default routes;