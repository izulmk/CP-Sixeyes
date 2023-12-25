import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import DetailNews from "./page/DetailNews";
import DetailPorto from "./page/DetailPorto";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailnews" element={<DetailNews />} />
        <Route path="/detailporto" element={<DetailPorto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
