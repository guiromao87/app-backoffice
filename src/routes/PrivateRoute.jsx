import { Navigate } from "react-router-dom";
import Header from "../components/Header/index";

export const PrivateRoute = ({ Component }) => {
    const isAuthenticated = sessionStorage.getItem('token');

    return isAuthenticated ? <> <Header /> <Component /> </> : <Navigate to="/" />;
}