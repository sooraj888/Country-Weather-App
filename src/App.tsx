import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import CountryInput from "./pages/CountryInput";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountryInput></CountryInput>}></Route>
      <Route
        path="countryDetails"
        element={<CountryDetails></CountryDetails>}
      ></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default App;
