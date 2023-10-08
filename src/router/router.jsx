import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import HomePages from "../Pages/HomePages"
import ErrorPage from "../Pages/ErrorPage"
import AboutUs from "../Pages/AboutUs"
import Weddings from "../Pages/Weddings"
import ServicesPage from "../Pages/ServicesPage"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import ServicesDetails from "../components/ServicesDetails"
import PrivateRouter from "../PrivateRoute/PrivateRouter"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <HomePages></HomePages>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/services",
                element: <ServicesPage></ServicesPage>
            },
            {
                path: "/service/:id",
                element: <PrivateRouter><ServicesDetails></ServicesDetails></PrivateRouter>
            },
            {
                path: "/wedding",
                element: <PrivateRouter><Weddings></Weddings></PrivateRouter>
            },
            {
                path: "/birthDay",
                element: <PrivateRouter><h1>BirthDay</h1></PrivateRouter>
            },
            {
                path: "/anniversaries",
                element: <h1>Anniversaries</h1>
            },
            {
                path: "/gallery",
                element: <PrivateRouter><h1>Gallery</h1></PrivateRouter>

            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
])
export default router