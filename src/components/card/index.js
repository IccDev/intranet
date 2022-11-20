import React from "react";
import "./style.css";

const ServiceCard = ({ description, url, image }) => {
  return (
    <div className="card">
      <h6>{description}</h6>
      <img src={image} alt="" />
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
