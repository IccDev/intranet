import React, { useEffect } from "react";

const Service = ({url}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.replace(url);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className="container">
            <h3>Redirect...</h3>
        </div>
    );
};


export default Service;