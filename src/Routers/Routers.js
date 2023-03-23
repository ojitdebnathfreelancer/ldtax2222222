import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/documents',
        element: <Main />
    },
    {
        path: '/',
        element: <Login />
    }
]);