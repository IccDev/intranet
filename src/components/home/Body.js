import React from "react";
import service_data  from "../../data/services";
import ServiceCard from "../card";

const Body = () => {
    return (
        <div className="container">
        {
            service_data().map((item, i) => <ServiceCard key={i} description={item.description} path={item.path} />)
        }
        </div>
    )
}

export default Body;