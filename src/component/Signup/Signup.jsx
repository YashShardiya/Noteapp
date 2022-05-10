import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Sig.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  const { createUser } = UserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    
    <div className="top-container-su">
      <div className="top-inner-container-su">
        <div className="heading-div">
          <h1>SignUp to your account</h1>
          <p>
            Already Have Account? <Link to="/">SignIn</Link>
          </p>
        </div>
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/>

            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
