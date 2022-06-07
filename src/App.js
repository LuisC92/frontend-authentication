import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
