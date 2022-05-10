import React from 'react'
import { UserAuth } from "./component/context/AuthContext";
import { Navigate} from "react-router-dom";

const ProtectedRoute = ({childern}) =>{
    const {user} = UserAuth();

    if (!user) {
        return <Navigate to='/' replace/>
    }
    return childern;
}

export default ProtectedRoute;
