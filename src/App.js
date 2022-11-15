import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/home";
import services_data from "./data/services";
import Service from "./components/service";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {
                services_data().map((item, i) => <Route key={i} path={item.path} element={<Service url={item.url} />} />)
            }
        </Routes>
    );
}


export default App;
