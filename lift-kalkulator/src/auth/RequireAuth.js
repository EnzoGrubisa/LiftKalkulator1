import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {

    const { auth } = useAuth();

    // useEffect(() => {
    //     const localAuth = localStorage.getItem('auth');
    //     if(localAuth){
    //         setAuth(JSON.parse(localAuth));
    //         //console.log("index.js -> local auth = " + localAuth);
    //     }
    //   }, [setAuth]);

    
    const location = useLocation();

    return (
        auth?.username
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
                // : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;