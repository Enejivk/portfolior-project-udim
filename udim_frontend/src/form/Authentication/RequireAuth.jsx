import { useLocation, Outlet, Navigate } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    return auth?.token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export default RequireAuth 