import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <strong>Adresse : </strong>
        <p>Rue des Lutins, 8</p>
        <p>1190 Forest</p>
      </div>
      <div className="footer-item">
        <strong>Email : </strong>
        <a className="hyperlink" href="mailto:iccdev@impactcentrechretien.eu">
          iccdev@impactcentrechretien.eu
        </a>
      </div>
      <div className="footer-item">
        <strong>Téléphone : </strong>
        <a className="hyperlink" href="tel:+32 2 245 92 50">
          +32 2 245 92 50
        </a>
      </div>
    </footer>
  );
};

export default Footer;
