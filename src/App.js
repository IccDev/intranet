import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/home";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}


export default App;
