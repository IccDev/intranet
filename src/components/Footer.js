import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="element">
        <div className="adresse">
          <p>Adresse : </p>
          <p>Rue des Lutins, 8</p>
          <p>1190 Forest</p>
        </div>
        <div className="email">
          <p>Email : </p>
          <p>contact@impactcentrechretien.com</p>
        </div>
        <div className="phone">
          <p>Téléphone : </p>
          <p>+32 2 245 92 50</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
