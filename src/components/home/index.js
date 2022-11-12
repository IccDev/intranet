import React from "react";


import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import "./style.css";

//home Page
const Home = () => {
    return (
		<div className="main">
			<Header />
			<Body />
			<Footer />
		</div>
    );
  };

export default Home;