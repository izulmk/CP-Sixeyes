import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import DetailNews from "./page/DetailNews";
import DetailPorto from "./page/DetailPorto";
import AboutUs from "./page/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailnews" element={<DetailNews />} />
        <Route path="/detailporto" element={<DetailPorto />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
