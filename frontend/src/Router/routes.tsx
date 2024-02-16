import { createBrowserRouter } from "react-router-dom";
import App from "../App/layout/App";
import LandingPage from "../features/LandingPage/LandingPage";
import ForgetPassPage from "../features/AuthenPage/ForgetPassPage";
import RegisterPage from "../features/AuthenPage/RegisterPage";
import LoginPage from "../features/AuthenPage/LoginPage";

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '', element: <LandingPage/>},
            {path: '/login', element: <LoginPage/>},
            {path: '/forgetpass', element: <ForgetPassPage/>},
            {path: '/register', element: <RegisterPage/>}
        ]
    }
])