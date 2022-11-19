import React from "react";
import "./style.css";

const ServiceCard = ({ description, url/*, icon*/ }) => {
  return (
    <div className="card">
      <h6>{description}</h6>
      {/*<img className="service-icon" src={icon} alt="" />*/}
      <p>
        {
          <a
            className="link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Accéder
          </a>
        }
      </p>
    </div>
  );
};

export default ServiceCard;
