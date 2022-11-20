import React from "react";
import logo from "../../assets/logoicc2.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="" />
      <h1>Bienvenue à ICC</h1>
    </header>
  );
};

export default Header;
