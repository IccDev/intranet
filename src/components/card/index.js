import React from "react";
import "./style.css";

const ServiceCard = ({description, url}) => {
    return (
        <div className="card">
            <h6>{description}</h6>
            <p>
                {<a class="link" href={url} target="_blank" rel="noopener noreferrer">
                    Accéder
                </a>}
            </p>
        </div>
    )
}

export default ServiceCard