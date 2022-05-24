import React from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";



function App() {
  return (
    
    <Routes>
        
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<Signup />} />


        
    </Routes>

  );
}

export default App;
