import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "../Login/Log.css";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("home");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="main-div-container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide hello"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/image/1.jpg"
              className="d-block w-100"
              alt="..."
              width="50px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Add Note</h5>
              <p>Add Note of Daily Task</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/image/2.jpg"
              className="d-block w-100"
              alt="..."
              width="50px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Access AnyWhere</h5>
              <p>Access it from any where</p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-container">
        <div className="top-inner-container">
          <div className="heading-container">
            <h2>Signin to your account</h2>
            <p>
              Dont have an account yet? <Link to="/signup">SignUp</Link>
            </p>
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />

              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
