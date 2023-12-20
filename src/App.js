import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import DetailNews from "./page/DetailNews";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailnews" element={<DetailNews />} />
        {/* <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
