import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute(){
    const {user} = useSelector(state => state.auth);
    return user ? <Outlet /> : <Navigate to='/login' replace />;
}

export function GuestRoute(){
    const {user} = useSelector(state=> state.auth);
    return user ? <Navigate to='/dashboard' replace /> : <Outlet />;
}