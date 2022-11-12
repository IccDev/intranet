import React from "react";
import { Link } from "react-router-dom";


const ServiceCard = ({description, path}) => {
    return (
        <div className="card">
            <h6>{description}</h6>
            <p>
                <Link
                    to={path}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                >
                    Accéder
                </Link>
            </p>
        </div>
    )
}

export default ServiceCard