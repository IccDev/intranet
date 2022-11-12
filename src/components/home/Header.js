import React from "react";
import logo from "../../assets/logoicc2.png";

const Header = () => {
  return (
    <section className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="bienvenue">
        <h1>Bienvenue à ICC</h1>
        <span className="acceder">
          Veillez cliquer sur le buton <q>Accéder</q> d'un service spécifique
          pour y être rediriger
        </span>
      </div>
    </section>
  );
};

export default Header;
