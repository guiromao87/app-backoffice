import { Navigate } from "react-router-dom";
import Header from "../components/Header/index";
import { AsideMenu } from "../components/AsideMenu";

export const PrivateRoute = ({ Component }) => {
    const isAuthenticated = sessionStorage.getItem('token');

    return isAuthenticated ? (
        <>
            <Header />
            <div className="app-layout">
                <AsideMenu />
                <main className="page-content">
                    <Component />
                </main>
            </div>
        </>
    ) : <Navigate to="/" />;
}