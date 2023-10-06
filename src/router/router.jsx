import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import HomePages from "../Pages/HomePages"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/home",
                element: <HomePages></HomePages>
            }
        ]
    }
])
export default router