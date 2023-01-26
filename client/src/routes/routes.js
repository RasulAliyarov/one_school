import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Add from "../pages/Add"
import Courses from "../pages/Courses"
import MainRoot from "../components/MainRoot"
import Detail from "../pages/Detail";

export const routes = createBrowserRouter([
    {
        path: "",
        element: <MainRoot />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/add",
                element: <Add />
            },
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            },
        ]
    }
])