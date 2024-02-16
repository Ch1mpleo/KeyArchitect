import { createBrowserRouter } from "react-router-dom";
import App from "../App/layout/App";
import LandingPage from "../features/LandingPage/LandingPage";
import { Login } from "@mui/icons-material";
import ForgetPassPage from "../features/AuthenPage/ForgetPassPage";
import RegisterPage from "../features/AuthenPage/RegisterPage";

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '', element: <LandingPage/>},
            {path: '/login', element: <Login/>},
            {path: '/forgetpass', element: <ForgetPassPage/>},
            {path: '/register', element: <RegisterPage/>}
        ]
    }
])