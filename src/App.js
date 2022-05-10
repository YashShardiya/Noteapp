import React from "react";
import Todohome from "./component/Todohome/Todohome";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Signup from "./component/Signup/Signup";
import { AuthContextProvider } from "./component/context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";

function App() {
  return (
    <div>
      <Header />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="home"
            element={
              
                <Todohome exact element={<ProtectedRoute><Todohome /></ProtectedRoute>} />
              
            }
          />
        </Routes>
      </AuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
