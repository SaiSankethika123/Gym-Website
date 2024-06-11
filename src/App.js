import React from "react";
import SignUpPage from "./Components/SignUpPage";
import { Routes, Route } from "react-router";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Features from "./Components/Features";
import Offer from "./Components/Offer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </div>
      <NavBar />
    </>
  );
}

export default App;
