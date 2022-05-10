import React from "react"
import "./Account.css"
import {useNavigate} from "react-router-dom"
import { UserAuth } from "../context/AuthContext";



export default function Account() {
 const {user, logout} = UserAuth();
 const navigate = useNavigate()

 const handleLogout = async () =>{
   try {
     await logout()
     navigate("/")
     console.log("you are logged out");
   } catch (e) {
     console.log(e.message);
   }
 }


  return (
    <div className="account-login">
        <p>{user && user.email}</p>
        <button onClick={handleLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
    </div>
  )
}
