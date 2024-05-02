import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>

      
      </Routes>
    </BrowserRouter>
  );
};

export default Router;