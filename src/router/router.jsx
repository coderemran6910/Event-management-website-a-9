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
                element: <ServicesDetails></ServicesDetails>
            },
            {
                path: "/wedding",
                element: <Weddings></Weddings>
            },
            {
                path: "/birthDay",
                element: <h1>BirthDay</h1>
            },
            {
                path: "/anniversaries",
                element: <h1>Anniversaries</h1>
            },
            {
                path: "/gallery",
                element: <h1>Gallery</h1>

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