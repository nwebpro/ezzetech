import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Main />,
        errorElement: <h2>Error</h2>,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])