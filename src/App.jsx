import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Index from './view';
import Write from './view/Write';
import Read from './view/Read';
const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/Write" element={<Write name="Write"/>} />
      <Route path="/Read" element={<Read name="Read"/>} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;